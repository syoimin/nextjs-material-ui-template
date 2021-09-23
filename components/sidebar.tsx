import Link from 'next/link';
import { FC } from 'react';

const linkStyle = {
  marginRight: 15,
};

const Sidebar: FC = () => (
  <div>
    <Link href='/'>
      <a style={linkStyle}>経歴書</a>
    </Link>
    <Link href='/about'>
      <a style={linkStyle}>スキルセット</a>
    </Link>
    <Link href='/about'>
      <a style={linkStyle}>案件詳細</a>
    </Link>
  </div>
);

export default Sidebar;
