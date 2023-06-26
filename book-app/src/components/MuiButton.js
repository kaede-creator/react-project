import * as React from 'react';
import Button from '@mui/material/Button';
import SignIn from '../components/SignIn';

// コンポーネントの名前はデフォルトで「MyApp」になっているので、jsファイルと同一に修正するのを忘れずに
export default function MuiButton() {
  return (
    <div>
      <Button variant="contained">Hello World</Button>
      <SignIn />
    </div>
  );
}
