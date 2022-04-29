import api from '@/services/api';

export function fetchPeoples(page: number) {
  if (!page) {
    page = 1;
  }

  return api.get(`/api/peoples?page=${page}&order[createdAt]=desc`);
}

export function fetchPeople(peopleId: string) {
  return api.get(peopleId);
}
