
import { createFeatureSelector, createSelector } from '@ngrx/store';
import { usersFeatureKey, UserState, selectAll } from './user.reducer';

export const selectUserState = createFeatureSelector<UserState>(usersFeatureKey);

export const selectAllUsers = createSelector(selectUserState, selectAll);

export const selectUsersLoading = createSelector(
  selectUserState,
  (state: UserState) => state.loading
);

export const selectUsersError = createSelector(
  selectUserState,
  (state: UserState) => state.error
);