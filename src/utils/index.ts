export const setCookie = (cookieName: string, cookieValue: string, expirationTime?: number): void => {
  const expirationDays = 365;
  const date = new Date();
  date.setTime(date.getTime() + (expirationTime ?? expirationDays * 24 * 60 * 60 * 1000));
  const expires = `expires=${date.toUTCString()}`;
  document.cookie = `${cookieName}=${cookieValue}; ${expires}; path=/`;
};

export const getCookieValue = (cookieName: string): string | null => {
  const name = `${cookieName}=`;
  const decodedCookie = decodeURIComponent(document.cookie);
  const cookieArray = decodedCookie.split(';');

  for (let i = 0; i < cookieArray.length; i++) {
    let cookie = cookieArray[i];
    while (cookie.charAt(0) === ' ') {
      cookie = cookie.substring(1);
    }
    if (cookie.startsWith(name)) {
      return cookie.substring(name.length, cookie.length);
    }
  }

  return null;
};
