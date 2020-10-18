export function normalizeEmailValues(value: string | string[]): string[] {
    if (!value) {
        return [];
    }

    if (Array.isArray(value)) {
        if (!value.length) {
            return [];
        }

        return value.reduce((acc, val) => {
                const normalized = normalizeEmailValues(val);
                if (normalized) {
                    acc = [...acc, ...normalized];
                }
                return acc;
            },
            []);
    }

    return value
        .split(',')
        .map(x => x && x.trim())
        .filter(x => x);
}
