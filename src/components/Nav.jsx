import Link from "next/link";
import React from "react";

const Nav = () => {
	return (
		<nav>
			<ul
				style={{
					display: "flex",
					justifyContent: "space-evenly",
					alignItems: "center",
					background: "#9a00ff",
					padding: "20px",
                    listStyle:"none"
				}}
			>
				<li>
					<Link href={"/"}>Home</Link>
				</li>
				<li>
					<Link href={"/about"}>About</Link>
				</li>
				<li>
					<Link href={"/contact"}>Contact</Link>
				</li>
			</ul>
		</nav>
	);
};

export default Nav;
