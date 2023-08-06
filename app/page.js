import Main from './components/Main';
import { FormContextProvider } from '@/app/store/form-context';

export default function Home() {
  return (
    <FormContextProvider>
      <Main />
    </FormContextProvider>
  );
}
