using {
    cuid,
    managed
} from '@sap/cds/common';

namespace adi;

entity Table: cuid, managed {
    description: String;
}