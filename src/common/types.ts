import type { AxiosError, AxiosRequestConfig } from 'axios';

import type { HttpMethod, Role } from './constants';

// fetch data helper types
type WithoutDataPropsRequestConfig = {
  method: HttpMethod.GET | HttpMethod.DELETE;
  data?: never;
};

type WithDataPropsRequestConfig<U extends object> = {
  method: HttpMethod.POST | HttpMethod.PATCH;
  data: U;
};

type CommonPropsRequestConfig<U extends object> = WithDataPropsRequestConfig<U> | WithoutDataPropsRequestConfig;

type ExtraRequestConfig = {
  loadingLabel?: string;
  onLoadingStart?: () => void;
  onLoadingEnd?: () => void;
  successLabel?: string;
  onSuccess?: () => void;
  errorLabel?: string;
  onError?: () => void;
};

export type RequestConfig<U extends object | never> = Partial<AxiosRequestConfig> &
  CommonPropsRequestConfig<U> &
  ExtraRequestConfig;

// auth types
export interface LoginRequest {
  email: string;
  password: string;
}

export interface RegisterRequest extends LoginRequest {
  passwordConfirmation: string;
}

// visit chat and visit types
export interface ChatMessage {
  id: string;
  message: string;
  sender: string;
  user?: User;
  userId: string;
  createdAt: string | Date;
  updatedAt: string | Date;
  chat?: VisitChat;
  chatId: string;
}

export interface VisitChat {
  id: string;
  messages?: ChatMessage[];
  visit?: Visit;
  visitId: string;
  createdAt: string | Date;
  updatedAt: string | Date;
}

export interface VisitSummary {
  id: string;
  summary: string;
  visit?: Visit;
  visitId: string;
  createdAt: string | Date;
  updatedAt: string | Date;
}

export interface VisitStatus {
  id: string;
  name: string;
  visits?: Visit[];
  createdAt: string | Date;
  updatedAt: string | Date;
}

export interface Visit {
  id: string;
  date: string | Date;
  reason: string;
  doctor?: Doctor;
  doctorId: string;
  patient?: Patient;
  patientId: string;
  visitStatus?: VisitStatus;
  visitStatusId: string;
  visitSummary?: VisitSummary;
  visitChat?: VisitChat;
}

// doctor types
export interface MedicalSpeciality {
  id: string;
  name: string;
  createdAt: string | Date;
  updatedAt: string | Date;
  doctors?: Doctor[];
}

export interface Doctor {
  id: string;
  about: string;
  medicalSpecializations?: MedicalSpeciality[];
  visits: Visit[];
  createdAt: string | Date;
  updatedAt: string | Date;
  user?: User;
  userId: string;
}

// patient types
export interface MedicalData {
  id: string;
  height: number;
  weight: number;
  medicalConditions: string;
  medications: string;
  allergies: string;
  addictions: string;
  pesel: string;
  bloodType: string;
  createdAt: string | Date;
  updatedAt: string | Date;
  patient?: Patient;
  patientId: string;
}

export interface Patient {
  id: string;
  visits?: Visit[];
  medicalData?: MedicalData;
  createdAt: string | Date;
  updatedAt: string | Date;
  user?: User;
  userId: string;
}

// user types
export interface User {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
  password: string;
  dateOfBirth: string | Date;
  sex: string;
  createdAt: string | Date;
  updatedAt: string | Date;
  doctor?: Doctor;
  patient?: Patient;
  roles: Role[];
  isActive: boolean;
}

// auth state types
export interface AuthState {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
  roles: Role[];
  sex: string;
}

// theme mode types
export type ThemeMode = 'light' | 'dark';

// hooks types
export type UseFetchReturnType<T extends object, U extends object | never> = {
  data: T | null;
  isLoading: boolean;
  error: AxiosError | null;
  dataFetcher: (data?: U) => Promise<void>;
};
