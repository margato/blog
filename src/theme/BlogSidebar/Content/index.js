import React, { memo } from 'react';
import Heading from '@theme/Heading';
import Link from '@docusaurus/Link';


function groupItemsByPermalink(items) {
    return items.reduce((acc, item) => {
        console.log(item.permalink)
        const folder = item.permalink.split("/")[2] ?? "root"
        if (!acc[folder]) acc[folder] = [];
        acc[folder].push(item);
        return acc;
    }, {});
}

function BlogSidebarFolderGroup({ folder, className, children }) {
    return (
        <div role="group">
            <Heading as="h3" className={className}>
                {folder.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase())}
            </Heading>
            {children}
        </div>
    );
}

function BlogSidebarContent({ items, yearGroupHeadingClassName }) {
    const itemsByFolder = groupItemsByPermalink(items);
    const sortedFolders = Object.keys(itemsByFolder).sort();

    return (
        <>
            {sortedFolders.map((folder) => (
                <BlogSidebarFolderGroup
                    key={folder}
                    folder={folder}
                    className={yearGroupHeadingClassName}>
                    <ul style={{ listStyleType: 'none', paddingLeft: 0, marginLeft: 0 }}>
                        {itemsByFolder[folder].map((item) => (
                            <li key={item.permalink}>
                                <Link
                                    to={item.permalink}
                                    style={{ color: 'inherit', textDecoration: 'none' }}
                                >
                                    <small>{item.title}</small>
                                </Link>
                            </li>
                        ))}
                    </ul>
                </BlogSidebarFolderGroup>
            ))}
        </>
    );
}

export default memo(BlogSidebarContent);
