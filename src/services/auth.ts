import { IUser } from '@/common';

class AuthService {
  public login(username: string, password: string): Promise<IUser | null> {
    if (username === 'admin' && password === '12345') {
      localStorage.setItem('user', JSON.stringify({ username }));
      return Promise.resolve({ username });
    }

    return Promise.resolve(null);
  }

  public getUser(): Promise<IUser | null> {
    const userString = localStorage.getItem('user');

    if (!userString) return Promise.resolve(null);

    const user: IUser = JSON.parse(userString);

    return Promise.resolve(user);
  }

  public async logout(): Promise<IUser | null> {
    const user = await this.getUser();

    if (user) {
      localStorage.removeItem('user');
    }

    return user;
  }

  public userExist() {
    return !!localStorage.getItem('user');
  }
}

export { AuthService };
