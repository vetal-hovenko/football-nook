export async function fetchDataUniqueData<T>(
    key: string,
    id: number,
    season: number,
    cacheState: Record<string, T>,
    setCacheState: React.Dispatch<React.SetStateAction<Record<string, T>>>,
    fetchFunction: (id: number, season: number) => Promise<T>
) {
    if (cacheState[key]) {
        return cacheState[key];
    }

    const data = await fetchFunction(id, season);
    setCacheState({ ...cacheState, [key]: data });

    return data;
}