import {globalFlexioImport} from '@flexio-oss/global-import-registry'
import {deepKeyAssigner} from '@flexio-oss/js-type-helpers'
import {Cardinality} from 'src/js/types/Cardinality'

/**
 * @property {Cardinality}
 */
deepKeyAssigner(globalFlexioImport, 'io.flexio.selectable_property.Cardinality', Cardinality)
