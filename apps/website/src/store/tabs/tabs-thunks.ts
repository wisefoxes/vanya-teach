import { createAsyncThunk } from '@reduxjs/toolkit';
import { fetchLatestTabs, fetchPopularTabs, fetchTabById, fetchTabs } from 'api/tabs';
import { Product } from 'types/product';

const getPopularTabsAsync = createAsyncThunk<Product[]>('tabs/popular', async () => await fetchPopularTabs());
const getLatestTabsAsync = createAsyncThunk<Product[]>('tabs/latest', async () => await fetchLatestTabs());
const getAllTabsAsync = createAsyncThunk<Product[]>('tabs/all', async () => await fetchTabs());

const getTabByIdAsync = createAsyncThunk<Product, string>('tabs/by-id', async (id: string) => await fetchTabById(id));

export { getPopularTabsAsync, getLatestTabsAsync, getAllTabsAsync, getTabByIdAsync };
