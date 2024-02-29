import React from 'react';
import ReactDOM from 'react-dom/client';
import NameBadges from './components/name-badges/application';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import './index.css';
import AccidenCounter from './components/accident-counter/application';
import TypingChildren from './components/typing-children/application';
import { PackingListApplication } from './components/packing-list';
import { InspiriationalQuotesApplication } from './components/inspirational-quotes';
import { ColorsApplication } from './components/colors';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

const pages = ['accident-counter', 'name-badges', 'typing-children', 'packing-list', 'inspirational-quotes', 'colors'];

const Home = () => {
    return (
        <main className="flex flex-col items-center m-8 h-full">
            <h1 className="text-4xl font-bold mb-4">React + Typscript v2 - Class Projects</h1>
            <ul className="list-disc list-inside flex flex-col h-full">
                {pages.map((page) => (
                    <Link to={`/${page}`} className="m-2 text-lg">{page}</Link>
                ))}
            </ul>
        </main>
    );
};

root.render(
  <React.StrictMode>
    <Router>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/accident-counter" element={<AccidenCounter />} />
            <Route path="/name-badges" element={<NameBadges />} />
            <Route
                path="/typing-children"
                element={<TypingChildren />}
            />
            <Route path="/packing-list" element={<PackingListApplication/>} />\
            <Route path="/inspirational-quotes" element={<InspiriationalQuotesApplication/>} />
            <Route path="/colors" element={<ColorsApplication/>} />
        </Routes>
    </Router>
  </React.StrictMode>,
);
