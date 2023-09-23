import { readdir, writeFile } from 'node:fs/promises';
import { join } from 'node:path';

const capitalize = (str: string) => str.charAt(0).toUpperCase() + str.slice(1);

// @ts-ignore
const files = await readdir(join(__dirname, '../db'));

files.forEach(async (file) => {
  const {
    default: {
      color,
      path,
    }
  } = await import(join(__dirname, '../db', file));
  const socialName = file.replace('.json', '');
  const componentName = socialName.split(/[.\-_]/ig).map(capitalize).join('');
  const component = `
import SvgIcon from '@mui/material/SvgIcon';
import type { SvgIconProps } from '@mui/material/SvgIcon';
import React from 'react';

export type ${componentName}Props = SvgIconProps;
const ${componentName}: React.FC<${componentName}Props> = (props) => (
  <SvgIcon
    role="img"
    aria-label="bandsintown social icon"
    viewBox="0 0 64 64"
    {...props}
  >
      <g
        className="social-svg-icon"
        style={{
          transition: 'fill 170ms ease-in-out',
          fill: 'transparent'
        }}
      >
        <path d="M0,0H64V64H0Z${path}" />
      </g>

      <g
        className="social-svg-mask"
        style={{
          transition: 'fill 170ms ease-in-out',
          fill: "${color}"
        }}
      >
        <path d="${path}" />
      </g>
  </SvgIcon>
);

export default ${componentName};
  `;
  await writeFile(join(__dirname, `../${componentName}.tsx`), component);
});

// @ts-ignore
await writeFile(join(__dirname, '../next.ts'), `
import dynamic from 'next/dynamic';

${files.map((file) => {
    const socialName = file.replace('.json', '');
    const componentName = socialName.split(/[.\-_]/ig).map(capitalize).join('');
    return `export const ${componentName} = dynamic(() => import('./${componentName}'), { ssr: true });`;
  }).join('\n')}
`);
