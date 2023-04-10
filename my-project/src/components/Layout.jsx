import React, { useRef, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import MainContent from './Maincontents';
import Profile from './Profile';

import Cake from './projects/Cake';
import Moco from './projects/Moco';
import Bamboozle from './projects/Bamboozle';
import MissionMag from './projects/MissionMag';
import Gather from './projects/Gather';
import Nandeyanen from './projects/Nandeyanen';
import Kodomochi from './projects/Kodomochi';
import Emoji from './projects/Emoji';
import Shojo from './projects/Shojo';
import Pattern from './projects/Pattern';
import Nonbiri from './projects/Nonbiri';
import Type36 from './projects/Type36';
import Tenderloin from './projects/Tenderloin';
import Bookmarks from './projects/Bookmarks';
import Doodles from './projects/Doodles';





const Layout = () => {
    const [scrollToRef, setScrollToRef] = useState(null);
  
    return (
        <>
            <Navbar setScrollToRef={setScrollToRef}/>
            <Routes>
                <Route path="/" element={<MainContent scrollToRef={scrollToRef} />} />
                {/* Profile */}
                <Route path="/profile" element={<Profile />} />
                {/* Projects */}
                <Route path="/cake" element={<Cake />} />
                <Route path="/moco" element={<Moco />} />
                <Route path="/bamboozle" element={<Bamboozle />} />
                <Route path="/missionmag" element={<MissionMag />} />
                <Route path="/gather" element={<Gather />} />
                <Route path="/nandeyanen" element={<Nandeyanen />} />
                <Route path="/kodomochi" element={<Kodomochi />} />
                <Route path="/emoji" element={<Emoji />} />
                <Route path="/shojo" element={<Shojo />} />
                {/* Illustrations */}
                <Route path="/tljournal" element={<Tenderloin />} />
                <Route path="/bookmarks" element={<Bookmarks />} />
                <Route path="/36type" element={<Type36 />} />
                <Route path="/nonbiri" element={<Nonbiri />} />
                <Route path="/pattern" element={<Pattern />} />
                <Route path="/d" element={<Doodles />} />
            </Routes>
            <Footer />
        </>
    );
};

export default Layout;