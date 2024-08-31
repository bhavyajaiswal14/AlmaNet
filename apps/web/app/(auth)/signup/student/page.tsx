"use client";

import { useRouter } from 'next/navigation';
import { useSignUp } from '@clerk/nextjs';
import { useState } from 'react';

export default function StudentSignUpPage(){
  const router = useRouter();


  // Redirect to verify page if sign-up is complete

    router.push('/verify');
}


