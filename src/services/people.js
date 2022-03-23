import api from '@/services/api';

export function fetchPeoples(page) {
  const queryPage = page || 1;

  return api.get(`/api/peoples?page=${queryPage}&order[createdAt]=desc`);
}

export function fetchPeople(peopleId) {
  return api.get(peopleId);
}
