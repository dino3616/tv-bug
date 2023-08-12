import clsx, { type ClassValue } from 'clsx';
import { extendTailwindMerge, type Config as TailwindMergeConfig } from 'tailwind-merge';

const tailwindMergeConfig: Partial<TailwindMergeConfig> = {};

const twMerge = extendTailwindMerge(tailwindMergeConfig);

export const cn = (...inputs: ClassValue[]) => twMerge(clsx(inputs));
