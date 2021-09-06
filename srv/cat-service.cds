using { adi } from '../db/data-model';

service CatalogService {
    entity Table as select from adi.Table;
}