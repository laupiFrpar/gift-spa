import api from api;

export function fetchPeoples(page) {
  if (!page) {
    page = 1;
  }

  return api.get(`/api/peoples?page=${page}&order[createdAt]=desc`);
}

export function fetchPeople(peopleId) {
  return api.get(peopleId);
}
