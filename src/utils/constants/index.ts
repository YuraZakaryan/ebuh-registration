const size = {
  mobileS: '320px',
  mobileM: '375px',
  mobileL: '425px',
  mobileXL: '577px',
  tablet: '768px',
  laptop: '1024px',
  laptopM: '1280px',
  laptopL: '1440px',
  desktop: '2560px',
};

export const device = {
  mobileMaxS: `(max-width: ${size.mobileS})`,
  mobileMinS: `(min-width: ${size.mobileS})`,

  mobileMaxM: `(max-width: ${size.mobileM})`,
  mobileMinM: `(min-width: ${size.mobileM})`,

  mobileMaxL: `(max-width: ${size.mobileL})`,
  mobileMinL: `(min-width: ${size.mobileL})`,

  mobileMaxXL: `(max-width: ${size.mobileXL})`,
  mobileMinXL: `(min-width: ${size.mobileXL})`,

  tabletMax: `(max-width: ${size.tablet})`,
  tabletMin: `(min-width: ${size.tablet})`,

  laptopMax: `(max-width: ${size.laptop})`,
  laptopMin: `(min-width: ${size.laptop})`,

  laptopMaxM: `(max-width: ${size.laptopM})`,
  laptopMinM: `(min-width: ${size.laptopM})`,

  laptopMaxL: `(max-width: ${size.laptopL})`,
  laptopMinL: `(min-width: ${size.laptopL})`,

  desktopMax: `(max-width: ${size.desktop})`,
  desktopMin: `(min-width: ${size.desktop})`,

  desktopMaxL: `(max-width: ${size.desktop})`,
  desktopMinL: `(min-width: ${size.desktop})`,
};

export const imageExtensions: string[] = ['jpg', 'jpeg', 'png'];
export const documentExtensions: string[] = ['pdf', 'doc', 'docx'];
export const paginationOptions: string[] = [
  '10',
  '20',
  '30',
  '40',
  '50',
  '100',
  '200',
  '300',
  '400',
  '500',
];
