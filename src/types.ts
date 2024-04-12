import { ImgHTMLAttributes, InputHTMLAttributes, ReactNode } from 'react';

export interface IInputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
}

export interface ITeamsApiResponse {
  createdAt: string;
  name: string;
  avatar: string;
  phone: string;
  email: string;
  role: string;
  id: string;
}

export interface IUpcomingEventResponse {
  createdAt: string;
  name: string;
  eventImage: string;
  eventSport: string;
  attendee1: number;
  attendee2: number;
  id: string;
  eventName: string;
  avatar: string;
  guests: string;
}

export interface IEventCardProps {
  title: string;
  bgClass: string;
  icon: ReactNode;
  count: string;
  textColorClass?: string;
}

export interface ILoadingSkeletonProps {
  count?: number;
  containerClass?: string;
}

export interface ILazyImageProps extends ImgHTMLAttributes<HTMLImageElement> {
  placeholderSrc: string;
  src: string;
  alt: string;
}
