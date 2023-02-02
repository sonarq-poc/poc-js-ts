import { UserAccount } from '../users';

test('creates another user', () => {
    const obj = new UserAccount("Anna", 2);
    expect(obj.name).toBe("Anna");
    expect(obj.id).toBe(2); 
});