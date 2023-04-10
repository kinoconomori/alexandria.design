import os
import re
from bs4 import BeautifulSoup
from bs4 import NavigableString
import bs4
import requests

url_mode = True

if url_mode:
    url = 'http://www.alexandria.design/d.html'
    output_folder = ".//scripts"

    response = requests.get(url)
    content = response.text

    soup = BeautifulSoup(content, "html.parser")
else:
    html_file = ".//scripts//asdf.html"
    output_folder = ".//scripts"

    with open(html_file, "r") as f:
        content = f.read()

    soup = BeautifulSoup(content, "html.parser")

image_order = []
folder = None

jsx_elements = []

break_counter = 0
should_append_break = False
side_by_side_description_in_box = False

def process_text_parts(text_parts):
    formatted_parts = []
    current_line_parts = []
    start_line_break = True

    for part in text_parts:
        if isinstance(part, str):
            stripped_part = part.strip()
            if start_line_break and not stripped_part:
                continue
            start_line_break = False
            current_line_parts.append(f'"{stripped_part}"')
        else:
            start_line_break = False
            current_line_parts.append(str(part))

        if part == '\n':
            formatted_parts.append(current_line_parts)
            current_line_parts = []
            start_line_break = True

    if current_line_parts:
        formatted_parts.append(current_line_parts)

    return formatted_parts


for element in soup.find_all(["div", "img"]):
    if element.name == "img":
        src = element["src"]
        if not folder:
            folder = os.path.dirname(src).split('/')[1]
        image_order.append(os.path.splitext(os.path.basename(src))[0])
    elif element.name == "div":
        if "class" in element.attrs:
            if "box" in element["class"][0] and 'descriptionbox' not in element['class']:
                match = re.search(r'\d+', element["class"][0])
                if match:
                    box_number = int(match.group())
                    # Check for the specific situation
                    if element.select_one(".box3 .descriptiontext2"):
                        side_by_side_description_in_box = True
                    else:
                        jsx_elements.append(f'<Box boxNumber={{{box_number}}} imageIndex={{imageIndex++}} onClick={{handleImageClick}} />')

            elif "break" in element.get("class"):
                jsx_elements.append(f'<Break height={{defaultBreakSpace}} />')
            else:
                if "descriptionbox" in element["class"]:
                    mainhead = element.find("p", class_="mainhead")
                    subhead = element.find("p", class_="subhead")

                    desc_text_div = element.find("div", class_="descriptiontext")
                    for p in desc_text_div(["p"]):
                        p.extract()

                    text_parts = []
                    for content in desc_text_div.contents:
                        if isinstance(content, bs4.element.NavigableString):
                            text_parts.extend(content.strip().split("\n"))
                        else:
                            text_parts.append(content)

                    text_list = process_text_parts(text_parts)
                    formatted_text = ",\n".join(["[" + ", ".join(map(str, line_parts)) + "]" for line_parts in text_list])

                    props = []
                    if mainhead:
                        props.append(f'mainhead="{mainhead.get_text(strip=True)}"')
                    if subhead:
                        props.append(f'subhead="{subhead.get_text(strip=True)}"')
                    props.append(f'text={{[\n{", ".join(["[" + ", ".join(map(str, line_parts)) + "]" for line_parts in process_text_parts(text_parts)])}\n]}}')

                    jsx_elements.append(f'<DescriptionBox {" ".join(props)} />')

                elif "descriptiontext2" in element["class"]:
                    text = element.get_text(strip=True)
                    if side_by_side_description_in_box:
                        jsx_elements.append(f'<SideBySideDescription text="{text}" />')
                        side_by_side_description_in_box = False
                    else:
                        pass




image_order_str = ",\n".join([f'"{img}"' for img in image_order])

jsx_content = '''import React from 'react';
import Projects from './Projects';

import DescriptionBox from '../DescriptionBox';
import Box from '../Box';
import Break from '../Break';
import SideBySideDescription from '../SideBySideDescription';

const FileName = () => {{
    const folder = '{}';

    const imageOrder = [
        {}
    ];

    const renderBoxes = ({{handleImageClick}}) => {{
        let imageIndex = 0;
        let defaultBreakSpace = 4.6875;
        return (
            <>
                {}
            </>
        )
    }};

    return (
        <Projects folder={{folder}} imageOrder={{imageOrder}} renderBoxes={{renderBoxes}} />
    );
}};

export default FileName;
'''.format(folder, image_order_str, "\n".join(jsx_elements))


with open(os.path.join(output_folder, "FileName.jsx"), "w", encoding='utf-8') as f:
    f.write(jsx_content)