"use client";

import Image from "next/image";
import userData from "@/constants/data";
import Navbar from "./Navbar";
import ThemeToggle from "./ThemeToggle";

export default function Hero() {
  return (
    <header className="profile">
      <div className="profile-intro">
        <Image className="avatar" src={userData.avatarUrl} alt="Nico De Castro" width={64} height={64} priority />
        <h1>Nico De Castro<span aria-hidden="true">.</span></h1>
        <p className="profile-role">{userData.role}</p>
        <p className="profile-description">
          I build the systems behind the data reliable<br />
          pipelines, clean SQL, and automation that scales.
        </p>
      </div>
      <Navbar />
      <div className="profile-bottom">
        <div className="social-links">
          <a href={userData.socialLinks.github} target="_blank" rel="noreferrer">GitHub <span aria-hidden="true">↗</span></a>
          <a href={userData.socialLinks.linkedin} target="_blank" rel="noreferrer">LinkedIn <span aria-hidden="true">↗</span></a>
          <a href="mailto:jtdecastro@up.edu.ph">Email <span aria-hidden="true">↗</span></a>
        </div>
        <p>{userData.address}</p>
      </div>
      <ThemeToggle />
    </header>
  );
}
