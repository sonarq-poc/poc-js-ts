import { UserAccount } from './user';

test('creates user', () => {
    const obj = new UserAccount("Murphy", 1);
    expect(obj.name).toBe("Murphy");
    expect(obj.id).toBe(1); 
});