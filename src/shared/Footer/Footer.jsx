import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="bg-slate-900">
      <footer className="container mx-auto grid  md:grid-cols-3 gap-10 p-10  text-base-content">
        <div>
          <Link to="/" className="normal-case text-3xl font-bold text-white">
            Foodie <span className="text-red-600">Frenzy</span>
          </Link>
          <p className="text-slate-300 mt-4">
            Foodie Frenzy is a chef-related website that is dedicated to sharing
            the passion and creativity of culinary experts with food lovers
            around the world. Our website features an extensive collection of
            recipes crafted by top chefs from various cuisines and cultures,
            along with helpful tips, techniques, and tutorials that can help
            home cooks elevate their cooking skills.
          </p>
        </div>
        <div className="md:ms-8">
          <h4 className=" text-white text-2xl">Quick Links</h4>
          <ul className="text-slate-300 flex flex-col gap-4 mt-4">
            <a className="link link-hover">Home</a>
            <a className="link link-hover">About</a>
            <a className="link link-hover">Blog</a>
            <a className="link link-hover">Contact</a>
          </ul>
        </div>
        <div>
          <h4 className="text-white text-2xl">Contact</h4>
          <ul className="text-slate-300 flex flex-col gap-4 mt-4">
            <a className="link link-hover">
              27 West 24th St New York, NY 10010
            </a>
            <a className="link link-hover">877 . 485 . 0700</a>
            <a className="link link-hover">hello@pbminfotech.com</a>
          </ul>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
