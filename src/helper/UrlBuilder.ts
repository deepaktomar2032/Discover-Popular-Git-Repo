/**
 * Builder class to build URL
 */
export class UrlBuilder {
    private baseUrl: string;
    private queryString: string;

    constructor(baseUrl: string) {
        this.baseUrl = baseUrl;
        this.queryString = "";
    }
    isEmpty() {
        if (this.queryString != "") this.queryString += `&`;
    }

    setSort(key: string, value: string): void {
        this.isEmpty();
        this.queryString += `${key}=${value}`;
    }

    setOrder(key: string, value: string): void {
        this.isEmpty();
        this.queryString += `${key}=${value}`;
    }

    setPerPage(key: string, value: number): void {
        this.isEmpty();
        this.queryString += `${key}=${value}`;
    }

    setLanguage(key: string, value: string): void {
        this.isEmpty();
        this.queryString += `${key}:${value}`;
    }

    setCreated(key: string, value: string): void {
        this.isEmpty();
        this.queryString += `${key}:>${value}`;
    }

    build(): string {
        if (this.queryString != "") {
            return this.baseUrl + "?" + this.queryString;
        }
        return this.baseUrl;
    }
}
