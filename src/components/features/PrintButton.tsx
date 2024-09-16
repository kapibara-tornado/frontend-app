'use client';
import { Loader2 } from 'lucide-react';
import { Button } from '../ui/button';

type Props = {
  onClick: () => void;
  loading: boolean;
};

export const PrintButton = ({
  onClick,
  loading,
}: Props) => {
  return (
    <Button onClick={onClick} disabled={loading}>
      {!loading ? (
        '診断結果印刷'
      ) : (
        <Loader2 className="h-5 w-5 animate-spin" />
      )}
    </Button>
  );
};
