import React, { useState, useEffect } from "react";
import { Canvas } from "@react-three/fiber";
import ReactDOM from "react-dom/client";
import * as THREE from "three";
import HomeAnimation from "../HomeAnimation.jsx";

import { Link } from "react-router-dom";
import "./home.css";

const Home = () => {
  return (
    <>
      <div className="main-content">
        <div className="welcome-card">
          <img src="./images/leaves1.jpg" alt="Nature" />
          <h1>Welcome To Pomo</h1>
          <button className="get-started-btn">Get Started</button>
        </div>
      </div>
      <div className="webgl-container">
        <div className="webgl">
          <Canvas
            gl={{
              antialias: true,
              toneMapping: THREE.ACESFilmicToneMapping,
              // outputColorSpace: THREE.SRGBColorSpace
            }}
            camera={{
              fov: 35,
              near: 0.1,
              far: 100,
              position: [1, 1, 6],
            }}
          >
            <HomeAnimation />
          </Canvas>
        </div>
        <div className="overlay">
          <section className="section-container section-right">
            <h2 className="section-title">
              Introducing Pomo: Your Growth Partner in Productivity
            </h2>
            <div className="section-copy">
              Welcome to Pomo, a unique productivity app that harnesses the
              proven power of the Pomodoro Technique to transform your work
              habits and boost your efficiency. Our mission is to inspire and
              motivate you, not just to manage your time better, but to
              visualize your progress in a uniquely rewarding way.
            </div>
          </section>
          <section className="section-container section-left">
            <h2 className="section-title">Concept and Visualization</h2>
            <div className="section-copy">
              Pomo is more than just a time management tool; it's a journey of
              growth. Each completed task in your personalized task list doesn't
              just mark a job well done; it brings to life a 3D-rendered plant
              in your virtual garden. This visual representation of your
              achievements grows with you, offering a delightful and inspiring
              reflection of your hard work and dedication.
            </div>
          </section>
          <section className="section-container section-right">
            <h2 className="section-title">Personalization and Functionality</h2>
            <div className="section-copy">
              With Pomo, we believe in making productivity personal. That's why
              we've created a platform where you can set up your account, tailor
              your task list, and start the timer with ease. Each Pomodoro
              session is an opportunity to focus deeply, work effectively, and
              then take a well-deserved break, all while watching your virtual
              garden flourish.
            </div>
          </section>
          <section className="section-container section-left">
            <h2 className="section-title">Mission Statement</h2>
            <div className="section-copy">
              Our mission is simple: to help you grow. By blending the
              principles of the Pomodoro Technique with the joy of seeing your
              efforts bloom into something beautiful, Pomo is here to change the
              way you view productivity. It's time to nurture your tasks and
              yourself – one Pomodoro at a time. Welcome to Pomo, where your
              productivity and personal growth blossom together.
            </div>
          </section>
        </div>
      </div>
    </>
  );
};

export default Home;
