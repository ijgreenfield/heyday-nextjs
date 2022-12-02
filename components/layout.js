import Header from './header'
import Footer from "./footer";
import {BuilderComponent, builder} from "@builder.io/react";

builder.init('169056aaf8fc47cc9dd22bb1d1e732fa')

export default function Layout({ children, className }) {
    return (
        <main className={className}>
            <BuilderComponent model="announcement-bar" />
            
            <main>{children}</main>
            
        </main>
    )
}