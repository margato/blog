import Giscus from '@giscus/react';
import { useColorMode } from '@docusaurus/theme-common';

export default function GiscusComments() {
    const { colorMode } = useColorMode();

    return (
        <Giscus
            repo="margato/blog"
            repoId="R_kgDOPSXHYA"
            category="General"
            categoryId="DIC_kwDOPSXHYM4Ctayf"
            mapping="pathname"
            reactionsEnabled="1"
            emitMetadata="0"
            inputPosition="bottom"
            theme={colorMode === 'dark' ? 'dark' : 'light'}
            lang="en"
            loading="lazy"
        />
    );
}