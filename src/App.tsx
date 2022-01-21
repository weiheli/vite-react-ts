import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import Hello from './Hello';

function App() {
  const [count, setCount] = useState(0);
  const { t } = useTranslation();

  return (
    <div>
      <Hello />
      <p>{t('你好')}</p>
      <p>
        <button type="button" onClick={() => setCount((_count) => _count + 1)}>
          count is:
          {' '}
          {count}
        </button>
      </p>
    </div>
  );
}

export default App;
