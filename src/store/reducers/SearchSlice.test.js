import SearchSlice, { setSearch } from './SearchSlice';

describe('SearchSlice', () => {
  it('should set search correctly', () => {
    const initialState = { search: '' };
    const action = setSearch('test');
    const state = SearchSlice(initialState, action);
    expect(state.search).toBe('test');
  });
});