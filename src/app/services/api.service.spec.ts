

import {TestBed, async, inject} from '@angular/core/testing';
import {User} from '../models/user';
import {ApiService} from './api.service';

describe('ApiService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ApiService]
    });
  });

  it('should ...', inject([ApiService], (service: ApiService) => {
    expect(service).toBeTruthy();
  }));

  describe('#getAllUsers()', () => {

    it('should return an empty array by default', inject([ApiService], (service: ApiService) => {
      expect(service.getAllUsers()).toEqual([]);
    }));

    it('should return all users', inject([ApiService], (service: ApiService) => {
      let user1 = new User({name: "ABC DEF",
          email: "abc@def.com",
          address: "Pune",
          birthdate: "3/7/1991",
          gender: "M"});
      let user2 = new User({name: "POR STU",
          email: "pqr@stu.com",
          address: "Mumbai",
          birthdate: "12/7/1991",
          gender: "M"});
      service.createUser(user1);
      service.createUser(user2);
      expect(service.getAllUsers()).toEqual([user1, user2]);
    }));

  });

  describe('#save(user)', () => {

    it('should automatically assign an incrementing id', inject([ApiService], (service: ApiService) => {
      let user1 = new User({name: "ABC DEF",
          email: "abc@def.com",
          address: "Pune",
          birthdate: "3/7/1991",
          gender: "M"});
      let user2 = new User({name: "POR STU",
          email: "pqr@stu.com",
          address: "Mumbai",
          birthdate: "12/7/1991",
          gender: "M"});
      service.createUser(user1);
      service.createUser(user2);

      expect(service.getUserById(1)).toEqual(user1);
      expect(service.getUserById(2)).toEqual(user2);
    }));

  });

  describe('#deleteUserById(id)', () => {

    it('should remove user with the corresponding id', inject([ApiService], (service: ApiService) => {
      let user1 = new User({name: "ABC DEF",
      email: "abc@def.com",
      address: "Pune",
      birthdate: "3/7/1991",
      gender: "M"});
  let user2 = new User({name: "POR STU",
      email: "pqr@stu.com",
      address: "Mumbai",
      birthdate: "12/7/1991",
      gender: "M"});
      service.createUser(user1);
      service.createUser(user2);
      expect(service.getAllUsers()).toEqual([user1, user2]);
      service.deleteUserById(1);
      expect(service.getAllUsers()).toEqual([user2]);
      service.deleteUserById(2);
      expect(service.getAllUsers()).toEqual([]);
    }));

    it('should not removing anything if user with corresponding id is not found', inject([ApiService], (service: ApiService) => {
      let user1 = new User({name: "ABC DEF",
      email: "abc@def.com",
      address: "Pune",
      birthdate: "3/7/1991",
      gender: "M"});
  let user2 = new User({name: "POR STU",
      email: "pqr@stu.com",
      address: "Mumbai",
      birthdate: "12/7/1991",
      gender: "M"});
      service.createUser(user1);
      service.createUser(user2);
      expect(service.getAllUsers()).toEqual([user1, user2]);
      service.deleteUserById(3);
      expect(service.getAllUsers()).toEqual([user1, user2]);
    }));

  });

  
    

  

});
