/** @type {import('next').NextConfig} */
const nextConfig = {
  compiler: {
    styledComponents: true,
  },
  experimental: {
    serverActions: {
      bodySizeLimit: '500mb',
    },
  },
};

// punycode に関する DeprecationWarning だけ無視する処理を追加
const originalEmitWarning = process.emitWarning;

process.emitWarning = (warning, type, ...args) => {
  if (
    type === 'DeprecationWarning' &&
    warning.includes('punycode')
  ) {
    return; // punycode に関する警告は無視
  }
  originalEmitWarning(warning, type, ...args); // それ以外の警告は通常通り表示
};

export default nextConfig;
