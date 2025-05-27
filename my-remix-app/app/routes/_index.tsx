import { Link } from '@remix-run/react';

export default function Index() {
  return (
    <main style={{ padding: '2rem' }}>
      <h1>Portfolio</h1>
      <p className='text-blue-500 font-bold p-4'>
        안녕하세요 Front-end 개발자 최진문입니다. <br />
      </p>
      <nav>
        <ul>
          <li>
            <Link to='/about'>About Me</Link>
          </li>
          <li>
            <Link to='/projects'>Projects</Link>
          </li>
          <li>
            <Link to='/contact'>Contact</Link>
          </li>
        </ul>
      </nav>
    </main>
  );
}
