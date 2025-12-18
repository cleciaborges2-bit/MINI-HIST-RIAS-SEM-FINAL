
import React from 'react';

export interface FeatureItem {
  icon: string;
  title: string;
  description?: string;
}

export interface SectionProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
}