// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { lib } from '@react-ts-lib-repro/lib';
import NxWelcome from './nx-welcome';

export function App() {
  return (
    <>
      {lib()}
      <NxWelcome title="app" />
      <div />
    </>
  );
}

export default App;
