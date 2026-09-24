'use server'

import { cookies } from 'next/headers';

export async function loginAction(password) {
  const validPass = process.env.ADMIN_PASS || 'digitalghuru123';
  
  if (password === validPass) {
    const cookieStore = await cookies();
    cookieStore.set('admin_auth', 'true', { 
      secure: process.env.NODE_ENV === 'production', 
      httpOnly: true, 
      maxAge: 60 * 60 * 24 
    });
    return { success: true };
  }
  
  return { success: false, error: 'Incorrect password' };
}
