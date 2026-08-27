import { Injectable, signal } from '@angular/core';
import { Router } from '@angular/router';
import { initializeApp } from 'firebase/app';
import { Auth, FacebookAuthProvider, GoogleAuthProvider, User, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';
const firebaseConfig = { apiKey: 'AIzaSyDH0GMpPGggxGkjDdGiyBFqtrZpv8r1I-0', authDomain: 'angular4primeng.firebaseapp.com', databaseURL: 'https://angular4primeng.firebaseio.com', projectId: 'angular4primeng', messagingSenderId: '1027761631774' };
@Injectable({ providedIn: 'root' })
export class AuthService {
  private readonly auth: Auth = getAuth(initializeApp(firebaseConfig));
  readonly user = signal<User | null>(this.auth.currentUser);
  readonly ready: Promise<void>;
  error = '';
  constructor(private readonly router: Router) { this.ready = this.auth.authStateReady(); onAuthStateChanged(this.auth, user => this.user.set(user)); }
  get isAuthenticated(): boolean { return this.user() !== null; }
  async signIn(email: string, password: string): Promise<void> { await this.run(() => signInWithEmailAndPassword(this.auth, email, password), '/userlist'); }
  async signOut(): Promise<void> { await signOut(this.auth); await this.router.navigateByUrl('/login'); }
  async register(email: string, password: string): Promise<void> { await this.run(() => createUserWithEmailAndPassword(this.auth, email, password), '/userlist'); }
  async signInUsingFb(): Promise<void> { await this.run(() => signInWithPopup(this.auth, new FacebookAuthProvider()), '/userlist'); }
  async signInUsingGoogle(): Promise<void> { await this.run(() => signInWithPopup(this.auth, new GoogleAuthProvider()), '/userlist'); }
  private async run(action: () => Promise<unknown>, destination: string): Promise<void> { this.error = ''; try { await action(); await this.router.navigateByUrl(destination); } catch (error) { this.error = error instanceof Error ? error.message : 'Authentication failed'; } }
}
