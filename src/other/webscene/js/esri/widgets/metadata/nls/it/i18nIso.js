define(
   ({
  	
    documentTypes: {
    	data: {
    		caption: "é_ISO 19115 (Data)______È",
    		description: ""
    	},
    	service: {
    		caption: "é_ISO 19119 (Service)_______È",
    		description: ""
    	},
    	gmi: {
    		caption: "é_ISO 19115-2 (Imagery and Gridded Data)____________È",
    		description: ""
    	}
    },
    
    general: {
    	reference: "é_Reference____È"
    },
    
    sections: {
    	metadata: "é_Metadata___È",
    	identification: "é_Identification_____È",
    	distribution: "é_Distribution_____È",
    	quality: "é_Quality___È",
    	acquisition: "é_Acquisition____È"
    },
    
    metadataSection: {
    	identifier: "é_Identifier____È",
    	contact: "é_Contact___È",
    	date: "é_Date__È",
    	standard: "é_Standard___È",
    	reference: "é_Reference____È"
    },
    
    identificationSection: {
    	citation: "é_Citation___È",
    	description: "é_Description____È",
    	contact: "é_Contact___È",
    	thumbnail: "é_Thumbnail____È",
    	keywords: "é_Keywords___È",
    	constraints: "é_Constraints____È",
    	resource: "é_Resource___È",
    	resourceTab: {
    		representation: "é_Representation_____È",
    		language: "é_Language___È",
    		classification: "é_Classification_____È",
    		extent: "é_Extent___È"
    	},
    	serviceResourceTab: {
    		serviceType: "é_Service Type_____È",
    		extent: "é_Extent___È",
    		couplingType: "é_Coupling Type_____È",
    		operation: "é_Operation____È",
    		operatesOn: "é_Operates On____È"
    	}
    },
    
    distributionSection: {
    },
    
    qualitySection: {
    	scope: "é_Scope___È",
    	conformance: "é_Conformance____È",
    	lineage: "é_Lineage___È"
    },
    
    acquisitionSection: {
    	requirement: "é_Requirement____È",
    	objective: "é_Objective____È",
    	instrument: "é_Instrument____È",
    	plan: "é_Plan__È",
    	operation: "é_Operation____È",
    	platform: "é_Platform___È",
    	environment: "é_Environment____È"
    },
    
    AbstractMD_Identification: {
    	sAbstract: "é_Abstract___È",
    	purpose: "é_Purpose___È",
    	credit: "é_Credits___È",
    	pointOfContact: "é_Point of Contact______È",
    	resourceMaintenance: "é_Maintenance____È",
    	graphicOverview: "é_Graphic Overview______È",
    	descriptiveKeywords: "é_Keyword Collection______È",
    	resourceConstraints: "é_Constraints____È"
    },
    
    CI_Address: {
    	deliveryPoint: "é_Delivery Point_____È",
    	city: "é_City__È",
    	administrativeArea: "é_Administrative Area_______È",
    	postalCode: "é_Postal Code____È",
    	country: "é_Country___È",
    	electronicMailAddress: "é_E-Mail Address_____È"
    },
    
    CI_Citation: {
    	title: "é_Title___È",
    	alternateTitle: "é_Alternate Title______È",
    	identifier: "é_Unique Resource Identifier_________È",
    	resource: {
    		title: "é_Resource Title_____È",
    		date: "é_Resource Date_____È"
    	},
    	specification: {
    		title: "é_Specification Title_______È",
    		date: "é_Specification Date______È"
    	}
    },
    
    CI_Contact: {
    	phone: "é_Phone___È",
    	address: "é_Address___È",
    	onlineResource: "é_Online Resource______È",
    	hoursOfService: "é_Hours of Service______È",
    	contactInstructions: "é_Contact Instructions_______È"
    },
    
    CI_Date: {
    	date: "é_Date__È",
    	dateType: "é_Date Type____È"
    },
    
  	CI_DateTypeCode: {
  		caption: "é_Date Type____È",
  		creation: "é_Creation Date_____È",
  		publication: "é_Publication Date______È",
  		revision: "é_Revision Date_____È"
  	},
  	
    CI_OnLineFunctionCode: {
    	caption: "é_Function___È",
    	download: "é_Download___È",
    	information: "é_Information____È",
    	offlineAccess: "é_Offline Access_____È",
    	order: "é_Order___È",
    	search: "é_Search___È"
    },
    
    CI_OnlineResource: {
    	caption: "é_Online Resource______È",
    	linkage: "é_URL__È",
    	protocol: "é_Protocol___È",
    	applicationProfile: "é_Application Profile_______È",
    	name: "é_Name__È",
    	description: "é_Description____È",
    	sFunction: "é_Function___È"
    },
    
    CI_ResponsibleParty: {
    	caption: "é_Point of Contact______È",
    	individualName: "é_Individual Name______È",
    	organisationName: "é_Organisation Name______È",
    	positionName: "é_Position Name_____È",
    	contactInfo: "é_Contact Info_____È",
    	role: "é_Role__È"
    },
    
    CI_RoleCode: {
    	caption: "é_Role__È",
    	resourceProvider: "é_Resource Provider______È",
    	custodian: "é_Custodian____È",
    	owner: "é_Owner___È",
    	user: "é_User__È",
    	distributor: "é_Distributor____È",
    	originator: "é_Originator____È",
    	pointOfContact: "é_Point of Contact______È",
    	principalInvestigator: "é_Principal Investigator________È",
    	processor: "é_Processor____È",
    	publisher: "é_Publisher____È",
    	author: "é_Author___È"
    },
    
    CI_Telephone: {
    	voice: "é_Voice___È",
    	facsimile: "é_Fax__È"
    },
    
    DCPList: {
    	caption: "é_DCP__È",
    	XML: "é_XML__È",
    	CORBA: "é_CORBA___È",
    	JAVA: "é_JAVA__È",
    	COM: "é_COM__È",
    	SQL: "é_SQL__È",
    	WebServices: "é_WebServices____È"
    },
    
    DQ_ConformanceResult: {
    	caption: "é_Conformance Result______È",
    	explanation: "é_Explanation____È",
    	degree: {
    		caption: "é_Degree___È",
    		validationPerformed: "é_Validation Performed_______È",
    		conformant: "é_Conformant____È",
    		nonConformant: "é_Non Conformant_____È"
    	}
    },
    
    DQ_DataQuality: {
    	report: "é_Report___È"
    },
    
    DQ_Scope : {
    	level: "é_Scope (quality information applies to)____________È",
    	levelDescription: "é_Level Description______È"
    },
    
    EX_Extent: {
    	caption: "é_Extent___È",
    	description: "é_Description____È",
    	geographicElement: "é_Spatial Extent_____È",
    	temporalElement: "é_Temporal Extent______È",
    	verticalElement: "é_Vertical Extent______È"
    },
    
    EX_GeographicBoundingBox: {
    	westBoundLongitude: "é_West Bounding Longitude________È",
    	eastBoundLongitude: "é_East Bounding Longitude________È",
    	southBoundLatitude: "é_South Bounding Latitude________È",
    	northBoundLatitude: "é_North Bounding Latitude________È"
    },
    
    EX_GeographicDescription: {
    	caption: "é_Geographic Description________È"
    },
    
    EX_TemporalExtent: {
    	TimePeriod: {
    		beginPosition: "é_Begin Date____È",
    		endPosition: "é_End Date___È"
    	}
    },
    
    EX_VerticalExtent: {
    	minimumValue: "é_Minimum Value_____È",
    	maximumValue: "é_Maximum Value_____È",
    	verticalCRS: "é_Vertical CRS_____È"
    },
    
    Length: {
    	caption: "é_Length___È",
    	uom: "é_Units of Measure______È",
    	km: "é_Kilometers____È",
    	m: "é_Meters___È",
    	mi: "é_Miles___È",
    	ft: "é_Feet__È"
    },
    
    LI_Lineage: {
    	statement: "é_Lineage Statement______È"
    },
    
    MD_BrowseGraphic: {
    	fileName: "é_Browse Graphic URL______È",
    	fileDescription: "é_Browse Graphic Caption________È",
    	fileType: "é_Browse Graphic Type_______È"
    },
    
    MD_ClassificationCode: {
    	unclassified: "é_Unclassified_____È",
    	restricted: "é_Restricted____È",
    	confidential: "é_Confidential_____È",
    	secret: "é_Secret___È",
    	topSecret: "é_Top Secret____È"
    },
    
    MD_Constraints: {
    	caption: "é_Usage Constraints______È",
    	useLimitation: "é_Use Limitation_____È"
    },
    
    MD_DataIdentification: {
    	spatialRepresentationType: "é_Spatial Representation Type_________È",
    	spatialResolution: "é_Spatial Resolution______È",
    	language: "é_Resource Language______È",
    	supplementalInformation: "é_Supplemental_____È"
    },
    
    MD_DigitalTransferOptions: {
    	onLine: "é_Online___È"
    },
    
    MD_Distribution: {
    	distributionFormat: "é_Distribution Format_______È",
    	transferOptions: "é_Transfer Options______È"
    },
    
    MD_Format: {
    	name: "é_Format Name____È",
    	version: "é_Format Version_____È"
    },
    
    MD_Identifier: {
    	caption: "é_URI__È",
    	identifierCaption: "é_Identifier____È",
    	code: "é_Code__È"
    },
    
    MD_Keywords: {
    	delimitedCaption: "é_Keywords___È",
    	thesaurusName: "é_Associated Thesaurus_______È"
    },
    
    MD_KeywordTypeCode: {
    	caption: "é_Keyword Type_____È",
    	discipline: "é_Discipline____È",
    	place: "é_Place___È",
    	stratum: "é_Stratum___È",
    	temporal: "é_Temporal___È",
    	theme: "é_Theme___È"
    },
    
    MD_LegalConstraints: {
    	caption: "é_Legal Constraints______È",
    	accessConstraints: "é_Access Constraints______È",
    	useConstraints: "é_Use Constraints______È",
    	otherConstraints: "é_Other Constraints______È"
    },
    
    MD_MaintenanceFrequencyCode: {
    	caption: "é_Frequency____È",
    	continual: "é_Continual____È",
    	daily: "é_Daily___È",
    	weekly: "é_Weekly___È",
    	fortnightly: "é_Fortnightly____È",
    	monthly: "é_Monthly___È",
    	quarterly: "é_Quarterly____È",
    	biannually: "é_Biannually____È",
    	annually: "é_Annually___È",
    	asNeeded: "é_As Needed____È",
    	irregular: "é_Irregular____È",
    	notPlanned: "é_Not Planned____È",
    	unknown: "é_Unknown___È"
    },
    
    MD_Metadata: {
    	caption: "é_Metadata___È",
    	fileIdentifier: "é_File Identifier______È",
    	language: "é_Metadata Language______È",
    	hierarchyLevel: "é_Hierarchy Level______È",
    	hierarchyLevelName: "é_Hierarchy Level Name_______È",
    	contact: "é_Metadata Contact______È",
    	dateStamp: "é_Metadata Date_____È",
    	metadataStandardName: "é_Metadata Standard Name________È",
    	metadataStandardVersion: "é_Metadata Standard Version_________È",
    	referenceSystemInfo: "é_Reference System______È",
    	identificationInfo: "é_Identification_____È",
    	distributionInfo: "é_Distribution_____È",
    	dataQualityInfo: "é_Quality___È"
    },
    
    MD_ProgressCode: {
    	caption: "é_Progress Code_____È",
    	completed: "é_Completed____È",
    	historicalArchive: "é_Historical Archive______È",
    	obsolete: "é_Obsolete___È",
    	onGoing: "é_On Going___È",
    	planned: "é_Planned___È",
    	required: "é_Required___È",
    	underDevelopment: "é_Under Development______È"
    },
    
    MD_RepresentativeFraction: {
    	denominator: "é_Denominator____È"
    },
    
    MD_Resolution: {
    	equivalentScale: "é_Equivalent Scale______È",
    	distance: "é_Distance___È"
    },
    
    MD_RestrictionCode: {
    	copyright: "é_Copyright____È",
    	patent: "é_Patent___È",
    	patentPending: "é_Patent Pending_____È",
    	trademark: "é_Trademark____È",
    	license: "é_License___È",
    	intellectualPropertyRights: "é_Intellectual Property Rights_________È",
    	restricted: "é_Restricted____È",
    	otherRestrictions: "é_Other Restrictions______È"
    },
    
    MD_ScopeCode: {
    	attribute: "é_Attribute____È",
    	attributeType: "é_Attribute type_____È",
    	collectionHardware: "é_Collection hardware_______È",
    	collectionSession: "é_Collection session______È",
    	dataset: "é_Dataset___È",
    	series: "é_Series___È",
    	nonGeographicDataset: "é_Non geographic dataset________È",
    	dimensionGroup: "é_Dimension group______È",
    	feature: "é_Feature___È",
    	featureType: "é_Feature type_____È",
    	propertyType: "é_Property type_____È",
    	fieldSession: "é_Field session_____È",
    	software: "é_Software___È",
    	service: "é_Service___È",
    	model: "é_Model___È",
    	tile: "é_Tile__È"
    },
    
    MD_ScopeDescription: {
    	attributes: "é_Attributes____È",
    	features: "é_Features___È",
    	featureInstances: "é_Feature Instances______È",
    	attributeInstances: "é_Attribute Instances_______È",
    	dataset: "é_Dataset___È",
    	other: "é_Other___È"
    },
    
    MD_SecurityConstraints: {
    	caption: "é_Security Constraints_______È",
    	classification: "é_Classification_____È",
    	userNote: "é_User Note____È",
    	classificationSystem: "é_Classification System_______È",
    	handlingDescription: "é_Handling Description_______È"
    },
    
    MD_SpatialRepresentationTypeCode: {
    	caption: "é_Spatial Representation Type_________È",
    	vector: "é_Vector___È",
    	grid: "é_Grid__È",
    	textTable: "é_Text Table____È",
    	tin: "é_TIN__È",
    	stereoModel: "é_Stereo Model_____È",
    	video: "é_Video___È"
    },
    
    MD_TopicCategoryCode: {
    	caption: "é_Topic Category_____È",
    	boundaries: "é_Administrative and Political Boundaries_____________È",
    	farming: "é_Agriculture and Farming________È",
    	climatologyMeteorologyAtmosphere: "é_Atmosphere and Climatic________È",
    	biota: "é_Biology and Ecology_______È",
    	economy: "é_Business and Economic_______È",
    	planningCadastre: "é_Cadastral____È",
    	society: "é_Cultural, Society and Demography___________È",
    	elevation: "é_Elevation and Derived Products__________È",
    	environment: "é_Environment and Conservation_________È",
    	structure: "é_Facilities and Structures_________È",
    	geoscientificInformation: "é_Geological and Geophysical_________È",
    	health: "é_Human Health and Disease________È",
    	imageryBaseMapsEarthCover: "é_Imagery and Base Maps_______È",
    	inlandWaters: "é_Inland Water Resources________È",
    	location: "é_Locations and Geodetic Networks__________È",
    	intelligenceMilitary: "é_Military___È",
    	oceans: "é_Oceans and Estuaries_______È",
    	transportation: "é_Transportation Networks________È",
    	utilitiesCommunication: "é_Utilities and Communication_________È"
    },
    
    MI_ContextCode: {
    	caption: "é_Context___È",
    	acquisition: "é_Acquisition____È",
    	pass: "é_Pass__È",
    	wayPoint: "é_Waypoint___È"
    },
    
    MI_EnvironmentalRecord: {
    	caption: "é_Environmental Conditions________È",
    	averageAirTemperature: "é_Average Air Temperature________È",
    	maxRelativeHumidity: "é_Maximum Relative Humidity_________È",
    	maxAltitude: "é_Maximum Altitude______È",
    	meterologicalConditions: "é_Meterological Conditions________È"
    },
    
    MI_Event: {
    	identifier: "é_Event Identifier______È",
    	time: "é_Time__È",
    	expectedObjectiveReference: "é_Expected Objective (Objective Identifer)_____________È",
    	relatedSensorReference: "é_Related Sensor (Instrument Identifer)____________È",
    	relatedPassReference: "é_Related Pass (Platform Pass Identifer)____________È"
    },

    MI_GeometryTypeCode: {
    	point: "é_Point___È",
    	linear: "é_Linear___È",
    	areal: "é_Areal___È",
    	strip: "é_Strip___È"
    },
    
    MI_Instrument: {
    	citation: "é_Instrument Citation_______È",
    	identifier: "é_Instrument Identifier_______È",
    	sType: "é_Instrument Type______È",
    	description: "é_Instrument Description________È",
    	mountedOn: "é_Mounted On____È",
    	mountedOnPlatformReference: "é_Mounted On (Platform Identifier)___________È"
    },
    
    MI_Metadata: {
    	acquisitionInformation: "é_Acquisition____È"
    },
    
    MI_Objective: {
    	caption: "é_Objective____È",
    	identifier: "é_Objective Identifier_______È",
    	priority: "é_Priority of Target______È",
    	sFunction: "é_Function of Objective_______È",
    	extent: "é_Extent___È",
    	pass: "é_Platform Pass_____È",
    	sensingInstrumentReference: "é_Sensing Instrument (Instrument Identifier)______________È",
    	objectiveOccurrence: "é_Events___È",
    	sections: {
    		identification: "é_Identification_____È",
    		extent: "é_Extent___È",
    		pass: "é_Pass__È",
    		sensingInstrument: "é_Sensing Instrument______È",
    		objectiveOccurrence: "é_Events___È"
    	}
    },
    
    MI_ObjectiveTypeCode: {
    	caption: "é_Type (Collection Technique for Objective)_____________È",
    	instantaneousCollection: "é_Instantaneous Collection________È",
    	persistentView: "é_Persistent View______È",
    	survey: "é_Survey___È"
    },
    
    MI_Operation: {
    	caption: "é_Operation____È",
    	description: "é_Operation Description_______È",
    	citation: "é_Operation Citation______È",
    	identifier: "é_Operation Identifier_______È",
    	status: "é_Operation Status______È",
    	objectiveReference: "é_Related Objective (Objective Identifier)_____________È",
    	planReference: "é_Related Plan (Plan Identifier)__________È",
    	significantEventReference: "é_Related Event (Event Identifier)___________È",
    	platformReference: "é_Related Platform (Platform Identifier)____________È",
    	sections: {
    		identification: "é_Identification_____È",
    		related: "é_Related___È"
    	}
    },
    
    MI_OperationTypeCode: {
    	caption: "é_Operation Type_____È",
    	real: "é_Real__È",
    	simulated: "é_Simulated____È",
    	synthesized: "é_Synthesized____È"
    },
    
    MI_Plan: {
    	sType: "é_Sampling Geometry for Collecting Data____________È",
    	status: "é_Status of Plan_____È",
    	citation: "é_Citation of Authority Requesting Collection______________È",
    	satisfiedRequirementReference: "é_Satisfied Requirement (Requirement Identifier)_______________È",
    	operationReference: "é_Related Operation (Operation Identifier)_____________È"
    },
    
    MI_Platform: {
    	citation: "é_Platform Citation______È",
    	identifier: "é_Platform Identifier_______È",
    	description: "é_Description of Platform Supporting the Instrument________________È",
    	sponsor: "é_Sponsor Organization for Platform___________È",
    	instrument: "é_Instrument(s) mounted on the platform____________È",
    	instrumentReference: "é_Instrument Identifier_______È",
    	sections: {
    		identification: "é_Identification_____È",
    		sponsor: "é_Sponsor___È",
    		instruments: "é_Instruments____È"
    	}
    },
    
    MI_PlatformPass: {
    	identifier: "é_Platform Pass Identifier________È",
    	extent: "é_Platform Pass Extent_______È",
    	relatedEventReference: "é_Related Event (Event Identifer)__________È"
    },

    MI_PriorityCode: {
    	critical: "é_Critical___È", 
    	highImportance: "é_High Importance______È",
    	mediumImportance: "é_Medium Importance______È",
    	lowImportance: "é_Low Importance_____È"
    },
    
    MI_RequestedDate : {
    	requestedDateOfCollection: "é_Requested Date Of Collection_________È",
    	latestAcceptableDate: "é_Latest Acceptable Date________È"
    },
    
    MI_Requirement: {
    	caption: "é_Requirement____È",
    	citation: "é_Citation for Requirement Guidance Material______________È",
    	identifier: "é_Requirement Identifier________È",
    	requestor: "é_Requestor of Requirement________È",
    	recipient: "é_Recipient of Requirement Results___________È",
    	priority: "é_Requirement Priority_______È",
    	requestedDate: "é_Requested Date_____È",
    	expiryDate: "é_Expiry Date____È",
    	satisifiedPlanReference: "é_Satisfied Plan (Plan Identifier)___________È",
    	sections: {
    		identification: "é_Identification_____È",
    		requestor: "é_Requestor____È",
    		recipient: "é_Recipient____È",
    		priorityAndDates: "é_Priority And Dates______È",
    		satisifiedPlan: "é_Satisified  Plan______È"
    	}
    },
    
    MI_SequenceCode: {
    	caption: "é_Sequence___È",
    	start: "é_Start___È",
    	end: "é_End__È",
    	instantaneous: "é_Instantaneous_____È"
    },
    
    MI_TriggerCode: {
    	caption: "é_Trigger___È",
    	automatic: "é_Automatic____È",
    	manual: "é_Manual___È",
    	preProgrammed: "é_Preprogrammed_____È"
    },
    
    ObjectReference: {
    	uuidref: "é_UUID Reference_____È",
    	xlinkref: "é_URL Reference_____È"
    },
    
    RS_Identifier: {
    	caption: "é_ID Plus Code Space______È",
    	code: "é_Code__È",
    	codeSpace: "é_Code Space____È"
    },
    
    SV_CouplingType: {
    	loose: "é_Loose___È",
    	mixed: "é_Mixed___È",
    	tight: "é_Tight___È"
    },
    
    SV_OperationMetadata: {
    	operationName: "é_Operation Name_____È",
    	DCP: "é_DCP__È",
    	connectPoint: "é_Connect Point_____È"
    },
    
    SV_ServiceIdentification: {
    	serviceType: "é_ServiceType____È",
    	couplingType: "é_Coupling Type_____È",
    	containsOperations: "é_Operation Metadata______È",
    	operatesOn: "é_Operates On____È"
    },
    
    TM_Primitive: {
    	indeterminatePosition: "é_Indeterminate Position________È",
    	indeterminates: {
    		before: "é_Before___È",
       	after: "é_After___È",
      	now: "é_Now__È",
      	unknown: "é_Unknown___È"
    	}
    },
    
    gemet: {
    	concept: {
    		gemetConceptKeyword: "é_GEMET Concept Keyword_______È",
    		tool: "é_Look Up____È...",
    		dialogTitle: "é_GEMET - Concept Keyword________È",
    		searchLabel: "é_Search___È:",
    		searchTip: "é_Search GEMET_____È"
    	},
    	theme: {
    		tool: "é_Look Up____È...",
    		dialogTitle: "é_GEMET - Inspire Data Theme_________È"
    	},
    	ioerror: "é_There was an error communicating with the GEMET service: {url}____________________È",
    	searching: "é_Searching GEMET______È...",
    	noMatch: "é_No matching results were found__________È.",
      languages: {
      	"bg": "é_Bulgarian____È",
      	"cs": "é_Czech___È",
      	"da": "é_Danish___È",
      	"nl": "é_Dutch___È",
      	"en": "é_English___È",
      	"et": "é_Estonian___È",
      	"fi": "é_Finnish___È",
      	"fr": "é_French___È",
      	"de": "é_German___È",
      	"el": "é_Greek___È",
      	"hu": "é_Hungarian____È",
      	"ga": "é_Gaelic (Irish)_____È",
      	"it": "é_Italian___È",
      	"lv": "é_Latvian___È",
      	"lt": "é_Lithuanian____È",
      	"mt": "é_Maltese___È",
      	"pl": "é_Polish___È", 
      	"pt": "é_Portuguese____È",
      	"ro": "é_Romanian___È",
      	"sk": "é_Slovak___È",
      	"sl": "é_Slovenian____È",  	
      	"es": "é_Spanish___È",
      	"sv": "é_Swedish___È"
      }
    }
   
  })
);
