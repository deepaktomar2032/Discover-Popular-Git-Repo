/**
 * MarkFavourite class to save/delete/fetch id of favourite Repo
 */
export class MarkFavourite {
    public static instance: MarkFavourite;
    private favouriteRepo: Set<number>;

    private constructor() {
        this.favouriteRepo = new Set();
    }

    public static getInstance(): MarkFavourite {
        if (this.instance == null) this.instance = new MarkFavourite();
        return this.instance;
    }

    save(id: number): void {
        this.favouriteRepo.add(id);
    }

    delete(id: number): void {
        this.favouriteRepo.delete(id);
    }

    fetch(): Set<number> {
        return this.favouriteRepo;
    }
}
