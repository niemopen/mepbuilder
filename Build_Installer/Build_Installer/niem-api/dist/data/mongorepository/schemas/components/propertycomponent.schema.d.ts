import * as mongoose from 'mongoose';
export declare const PropertyComponentSchema: mongoose.Schema<any, mongoose.Model<any, any, any, any, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, {
    key?: number;
    packageId?: string;
    sourceNSPrefix?: string;
    sourcePropertyName?: string;
    sourceDataType?: string;
    sourceDefinition?: string;
    mappingCode?: string;
    targetNSPrefix?: string;
    targetPropertyName?: string;
    targetQualifiedDataType?: string;
    targetDefinition?: string;
    targetSubstitutionGroup?: string;
    targetIsAbstract?: string;
    targetStyle?: string;
    targetKeywords?: string;
    targetExampleContent?: string;
    targetUsageInfo?: string;
}>;