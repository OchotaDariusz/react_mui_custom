export enum HttpMethod {
  GET = 'GET',
  POST = 'POST',
  PATCH = 'PATCH',
  DELETE = 'DELETE'
}

export enum Role {
  ADMIN = 'admin',
  USER = 'user',
  DOCTOR = 'doctor',
  PATIENT = 'patient'
}

export const JWT_LOCAL_STORAGE_KEY = 'accessToken';

export const REFRESH_TOKEN_LOCAL_STORAGE_KEY = 'refreshToken';

export const AUTH_STATE_LOCAL_STORAGE_KEY = 'auth';

export const THEME_MODE_LOCAL_STORAGE_KEY = 'theme';

export const TOAST_DEFAULT_CONFIG = {
  autoClose: 3000,
  closeButton: true,
  closeOnClick: true,
  isLoading: false,
  pauseOnHover: true
};
