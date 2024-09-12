import React from "react";
import { resourcesLinks, platformLinks, communityLinks } from "../constants";

function Footer() {
  return (
    <div className="flex gap-40 items-center justify-center mx-100">
      <div className="flex flex-col space-y-2">
        <h2 className="mb-3 text-lg underline">Resources</h2>
        {resourcesLinks.map((resource, index) => (
          <ul key={index}>
            <li>
              <a
                className="text-neutral-300 hover:underline hover:text-neutral-400 tracking-wide"
                href={resource.href}
              >
                {resource.text}
              </a>
            </li>
          </ul>
        ))}
      </div>
      <div className="flex flex-col space-y-2">
        <h2 className="mb-3 text-lg underline">Platforms</h2>
        {platformLinks.map((platform, index) => (
          <ul key={index}>
            <li>
              <a
                className="text-neutral-300 hover:underline hover:text-neutral-400 tracking-wide"
                href={platform.href}
              >
                {platform.text}
              </a>
            </li>
          </ul>
        ))}
      </div>
      <div className="flex flex-col space-y-2">
        <h2 className="mb-3 text-lg underline">Community</h2>
        {communityLinks.map((community, index) => (
          <ul key={index}>
            <li>
              <a
                className="text-neutral-300 hover:underline hover:text-neutral-400 tracking-wide"
                href={community.href}
              >
                {community.text}
              </a>
            </li>
          </ul>
        ))}
      </div>
    </div>
  );
}

export default Footer;
