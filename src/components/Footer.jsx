import React from 'react';
import { profile } from '../data';

const Footer = () => {
    return (
        <footer className="py-8 bg-slate-950 border-t border-white/5 text-center px-6">
            <p className="text-slate-500 text-sm">
                &copy; {new Date().getFullYear()} <span className="text-slate-300 font-medium">{profile.name}</span>. All rights reserved.
            </p>
        </footer>
    );
};

export default Footer;
