define(
   ({
  	
    documentTypes: {
    	data: {
    		caption: "ı_ISO 19115 (Data)______İ",
    		description: ""
    	},
    	service: {
    		caption: "ı_ISO 19119 (Service)_______İ",
    		description: ""
    	},
    	gmi: {
    		caption: "ı_ISO 19115-2 (Imagery and Gridded Data)____________İ",
    		description: ""
    	}
    },
    
    general: {
    	reference: "ı_Reference____İ"
    },
    
    sections: {
    	metadata: "ı_Metadata___İ",
    	identification: "ı_Identification_____İ",
    	distribution: "ı_Distribution_____İ",
    	quality: "ı_Quality___İ",
    	acquisition: "ı_Acquisition____İ"
    },
    
    metadataSection: {
    	identifier: "ı_Identifier____İ",
    	contact: "ı_Contact___İ",
    	date: "ı_Date__İ",
    	standard: "ı_Standard___İ",
    	reference: "ı_Reference____İ"
    },
    
    identificationSection: {
    	citation: "ı_Citation___İ",
    	description: "ı_Description____İ",
    	contact: "ı_Contact___İ",
    	thumbnail: "ı_Thumbnail____İ",
    	keywords: "ı_Keywords___İ",
    	constraints: "ı_Constraints____İ",
    	resource: "ı_Resource___İ",
    	resourceTab: {
    		representation: "ı_Representation_____İ",
    		language: "ı_Language___İ",
    		classification: "ı_Classification_____İ",
    		extent: "ı_Extent___İ"
    	},
    	serviceResourceTab: {
    		serviceType: "ı_Service Type_____İ",
    		extent: "ı_Extent___İ",
    		couplingType: "ı_Coupling Type_____İ",
    		operation: "ı_Operation____İ",
    		operatesOn: "ı_Operates On____İ"
    	}
    },
    
    distributionSection: {
    },
    
    qualitySection: {
    	scope: "ı_Scope___İ",
    	conformance: "ı_Conformance____İ",
    	lineage: "ı_Lineage___İ"
    },
    
    acquisitionSection: {
    	requirement: "ı_Requirement____İ",
    	objective: "ı_Objective____İ",
    	instrument: "ı_Instrument____İ",
    	plan: "ı_Plan__İ",
    	operation: "ı_Operation____İ",
    	platform: "ı_Platform___İ",
    	environment: "ı_Environment____İ"
    },
    
    AbstractMD_Identification: {
    	sAbstract: "ı_Abstract___İ",
    	purpose: "ı_Purpose___İ",
    	credit: "ı_Credits___İ",
    	pointOfContact: "ı_Point of Contact______İ",
    	resourceMaintenance: "ı_Maintenance____İ",
    	graphicOverview: "ı_Graphic Overview______İ",
    	descriptiveKeywords: "ı_Keyword Collection______İ",
    	resourceConstraints: "ı_Constraints____İ"
    },
    
    CI_Address: {
    	deliveryPoint: "ı_Delivery Point_____İ",
    	city: "ı_City__İ",
    	administrativeArea: "ı_Administrative Area_______İ",
    	postalCode: "ı_Postal Code____İ",
    	country: "ı_Country___İ",
    	electronicMailAddress: "ı_E-Mail Address_____İ"
    },
    
    CI_Citation: {
    	title: "ı_Title___İ",
    	alternateTitle: "ı_Alternate Title______İ",
    	identifier: "ı_Unique Resource Identifier_________İ",
    	resource: {
    		title: "ı_Resource Title_____İ",
    		date: "ı_Resource Date_____İ"
    	},
    	specification: {
    		title: "ı_Specification Title_______İ",
    		date: "ı_Specification Date______İ"
    	}
    },
    
    CI_Contact: {
    	phone: "ı_Phone___İ",
    	address: "ı_Address___İ",
    	onlineResource: "ı_Online Resource______İ",
    	hoursOfService: "ı_Hours of Service______İ",
    	contactInstructions: "ı_Contact Instructions_______İ"
    },
    
    CI_Date: {
    	date: "ı_Date__İ",
    	dateType: "ı_Date Type____İ"
    },
    
  	CI_DateTypeCode: {
  		caption: "ı_Date Type____İ",
  		creation: "ı_Creation Date_____İ",
  		publication: "ı_Publication Date______İ",
  		revision: "ı_Revision Date_____İ"
  	},
  	
    CI_OnLineFunctionCode: {
    	caption: "ı_Function___İ",
    	download: "ı_Download___İ",
    	information: "ı_Information____İ",
    	offlineAccess: "ı_Offline Access_____İ",
    	order: "ı_Order___İ",
    	search: "ı_Search___İ"
    },
    
    CI_OnlineResource: {
    	caption: "ı_Online Resource______İ",
    	linkage: "ı_URL__İ",
    	protocol: "ı_Protocol___İ",
    	applicationProfile: "ı_Application Profile_______İ",
    	name: "ı_Name__İ",
    	description: "ı_Description____İ",
    	sFunction: "ı_Function___İ"
    },
    
    CI_ResponsibleParty: {
    	caption: "ı_Point of Contact______İ",
    	individualName: "ı_Individual Name______İ",
    	organisationName: "ı_Organisation Name______İ",
    	positionName: "ı_Position Name_____İ",
    	contactInfo: "ı_Contact Info_____İ",
    	role: "ı_Role__İ"
    },
    
    CI_RoleCode: {
    	caption: "ı_Role__İ",
    	resourceProvider: "ı_Resource Provider______İ",
    	custodian: "ı_Custodian____İ",
    	owner: "ı_Owner___İ",
    	user: "ı_User__İ",
    	distributor: "ı_Distributor____İ",
    	originator: "ı_Originator____İ",
    	pointOfContact: "ı_Point of Contact______İ",
    	principalInvestigator: "ı_Principal Investigator________İ",
    	processor: "ı_Processor____İ",
    	publisher: "ı_Publisher____İ",
    	author: "ı_Author___İ"
    },
    
    CI_Telephone: {
    	voice: "ı_Voice___İ",
    	facsimile: "ı_Fax__İ"
    },
    
    DCPList: {
    	caption: "ı_DCP__İ",
    	XML: "ı_XML__İ",
    	CORBA: "ı_CORBA___İ",
    	JAVA: "ı_JAVA__İ",
    	COM: "ı_COM__İ",
    	SQL: "ı_SQL__İ",
    	WebServices: "ı_WebServices____İ"
    },
    
    DQ_ConformanceResult: {
    	caption: "ı_Conformance Result______İ",
    	explanation: "ı_Explanation____İ",
    	degree: {
    		caption: "ı_Degree___İ",
    		validationPerformed: "ı_Validation Performed_______İ",
    		conformant: "ı_Conformant____İ",
    		nonConformant: "ı_Non Conformant_____İ"
    	}
    },
    
    DQ_DataQuality: {
    	report: "ı_Report___İ"
    },
    
    DQ_Scope : {
    	level: "ı_Scope (quality information applies to)____________İ",
    	levelDescription: "ı_Level Description______İ"
    },
    
    EX_Extent: {
    	caption: "ı_Extent___İ",
    	description: "ı_Description____İ",
    	geographicElement: "ı_Spatial Extent_____İ",
    	temporalElement: "ı_Temporal Extent______İ",
    	verticalElement: "ı_Vertical Extent______İ"
    },
    
    EX_GeographicBoundingBox: {
    	westBoundLongitude: "ı_West Bounding Longitude________İ",
    	eastBoundLongitude: "ı_East Bounding Longitude________İ",
    	southBoundLatitude: "ı_South Bounding Latitude________İ",
    	northBoundLatitude: "ı_North Bounding Latitude________İ"
    },
    
    EX_GeographicDescription: {
    	caption: "ı_Geographic Description________İ"
    },
    
    EX_TemporalExtent: {
    	TimePeriod: {
    		beginPosition: "ı_Begin Date____İ",
    		endPosition: "ı_End Date___İ"
    	}
    },
    
    EX_VerticalExtent: {
    	minimumValue: "ı_Minimum Value_____İ",
    	maximumValue: "ı_Maximum Value_____İ",
    	verticalCRS: "ı_Vertical CRS_____İ"
    },
    
    Length: {
    	caption: "ı_Length___İ",
    	uom: "ı_Units of Measure______İ",
    	km: "ı_Kilometers____İ",
    	m: "ı_Meters___İ",
    	mi: "ı_Miles___İ",
    	ft: "ı_Feet__İ"
    },
    
    LI_Lineage: {
    	statement: "ı_Lineage Statement______İ"
    },
    
    MD_BrowseGraphic: {
    	fileName: "ı_Browse Graphic URL______İ",
    	fileDescription: "ı_Browse Graphic Caption________İ",
    	fileType: "ı_Browse Graphic Type_______İ"
    },
    
    MD_ClassificationCode: {
    	unclassified: "ı_Unclassified_____İ",
    	restricted: "ı_Restricted____İ",
    	confidential: "ı_Confidential_____İ",
    	secret: "ı_Secret___İ",
    	topSecret: "ı_Top Secret____İ"
    },
    
    MD_Constraints: {
    	caption: "ı_Usage Constraints______İ",
    	useLimitation: "ı_Use Limitation_____İ"
    },
    
    MD_DataIdentification: {
    	spatialRepresentationType: "ı_Spatial Representation Type_________İ",
    	spatialResolution: "ı_Spatial Resolution______İ",
    	language: "ı_Resource Language______İ",
    	supplementalInformation: "ı_Supplemental_____İ"
    },
    
    MD_DigitalTransferOptions: {
    	onLine: "ı_Online___İ"
    },
    
    MD_Distribution: {
    	distributionFormat: "ı_Distribution Format_______İ",
    	transferOptions: "ı_Transfer Options______İ"
    },
    
    MD_Format: {
    	name: "ı_Format Name____İ",
    	version: "ı_Format Version_____İ"
    },
    
    MD_Identifier: {
    	caption: "ı_URI__İ",
    	identifierCaption: "ı_Identifier____İ",
    	code: "ı_Code__İ"
    },
    
    MD_Keywords: {
    	delimitedCaption: "ı_Keywords___İ",
    	thesaurusName: "ı_Associated Thesaurus_______İ"
    },
    
    MD_KeywordTypeCode: {
    	caption: "ı_Keyword Type_____İ",
    	discipline: "ı_Discipline____İ",
    	place: "ı_Place___İ",
    	stratum: "ı_Stratum___İ",
    	temporal: "ı_Temporal___İ",
    	theme: "ı_Theme___İ"
    },
    
    MD_LegalConstraints: {
    	caption: "ı_Legal Constraints______İ",
    	accessConstraints: "ı_Access Constraints______İ",
    	useConstraints: "ı_Use Constraints______İ",
    	otherConstraints: "ı_Other Constraints______İ"
    },
    
    MD_MaintenanceFrequencyCode: {
    	caption: "ı_Frequency____İ",
    	continual: "ı_Continual____İ",
    	daily: "ı_Daily___İ",
    	weekly: "ı_Weekly___İ",
    	fortnightly: "ı_Fortnightly____İ",
    	monthly: "ı_Monthly___İ",
    	quarterly: "ı_Quarterly____İ",
    	biannually: "ı_Biannually____İ",
    	annually: "ı_Annually___İ",
    	asNeeded: "ı_As Needed____İ",
    	irregular: "ı_Irregular____İ",
    	notPlanned: "ı_Not Planned____İ",
    	unknown: "ı_Unknown___İ"
    },
    
    MD_Metadata: {
    	caption: "ı_Metadata___İ",
    	fileIdentifier: "ı_File Identifier______İ",
    	language: "ı_Metadata Language______İ",
    	hierarchyLevel: "ı_Hierarchy Level______İ",
    	hierarchyLevelName: "ı_Hierarchy Level Name_______İ",
    	contact: "ı_Metadata Contact______İ",
    	dateStamp: "ı_Metadata Date_____İ",
    	metadataStandardName: "ı_Metadata Standard Name________İ",
    	metadataStandardVersion: "ı_Metadata Standard Version_________İ",
    	referenceSystemInfo: "ı_Reference System______İ",
    	identificationInfo: "ı_Identification_____İ",
    	distributionInfo: "ı_Distribution_____İ",
    	dataQualityInfo: "ı_Quality___İ"
    },
    
    MD_ProgressCode: {
    	caption: "ı_Progress Code_____İ",
    	completed: "ı_Completed____İ",
    	historicalArchive: "ı_Historical Archive______İ",
    	obsolete: "ı_Obsolete___İ",
    	onGoing: "ı_On Going___İ",
    	planned: "ı_Planned___İ",
    	required: "ı_Required___İ",
    	underDevelopment: "ı_Under Development______İ"
    },
    
    MD_RepresentativeFraction: {
    	denominator: "ı_Denominator____İ"
    },
    
    MD_Resolution: {
    	equivalentScale: "ı_Equivalent Scale______İ",
    	distance: "ı_Distance___İ"
    },
    
    MD_RestrictionCode: {
    	copyright: "ı_Copyright____İ",
    	patent: "ı_Patent___İ",
    	patentPending: "ı_Patent Pending_____İ",
    	trademark: "ı_Trademark____İ",
    	license: "ı_License___İ",
    	intellectualPropertyRights: "ı_Intellectual Property Rights_________İ",
    	restricted: "ı_Restricted____İ",
    	otherRestrictions: "ı_Other Restrictions______İ"
    },
    
    MD_ScopeCode: {
    	attribute: "ı_Attribute____İ",
    	attributeType: "ı_Attribute type_____İ",
    	collectionHardware: "ı_Collection hardware_______İ",
    	collectionSession: "ı_Collection session______İ",
    	dataset: "ı_Dataset___İ",
    	series: "ı_Series___İ",
    	nonGeographicDataset: "ı_Non geographic dataset________İ",
    	dimensionGroup: "ı_Dimension group______İ",
    	feature: "ı_Feature___İ",
    	featureType: "ı_Feature type_____İ",
    	propertyType: "ı_Property type_____İ",
    	fieldSession: "ı_Field session_____İ",
    	software: "ı_Software___İ",
    	service: "ı_Service___İ",
    	model: "ı_Model___İ",
    	tile: "ı_Tile__İ"
    },
    
    MD_ScopeDescription: {
    	attributes: "ı_Attributes____İ",
    	features: "ı_Features___İ",
    	featureInstances: "ı_Feature Instances______İ",
    	attributeInstances: "ı_Attribute Instances_______İ",
    	dataset: "ı_Dataset___İ",
    	other: "ı_Other___İ"
    },
    
    MD_SecurityConstraints: {
    	caption: "ı_Security Constraints_______İ",
    	classification: "ı_Classification_____İ",
    	userNote: "ı_User Note____İ",
    	classificationSystem: "ı_Classification System_______İ",
    	handlingDescription: "ı_Handling Description_______İ"
    },
    
    MD_SpatialRepresentationTypeCode: {
    	caption: "ı_Spatial Representation Type_________İ",
    	vector: "ı_Vector___İ",
    	grid: "ı_Grid__İ",
    	textTable: "ı_Text Table____İ",
    	tin: "ı_TIN__İ",
    	stereoModel: "ı_Stereo Model_____İ",
    	video: "ı_Video___İ"
    },
    
    MD_TopicCategoryCode: {
    	caption: "ı_Topic Category_____İ",
    	boundaries: "ı_Administrative and Political Boundaries_____________İ",
    	farming: "ı_Agriculture and Farming________İ",
    	climatologyMeteorologyAtmosphere: "ı_Atmosphere and Climatic________İ",
    	biota: "ı_Biology and Ecology_______İ",
    	economy: "ı_Business and Economic_______İ",
    	planningCadastre: "ı_Cadastral____İ",
    	society: "ı_Cultural, Society and Demography___________İ",
    	elevation: "ı_Elevation and Derived Products__________İ",
    	environment: "ı_Environment and Conservation_________İ",
    	structure: "ı_Facilities and Structures_________İ",
    	geoscientificInformation: "ı_Geological and Geophysical_________İ",
    	health: "ı_Human Health and Disease________İ",
    	imageryBaseMapsEarthCover: "ı_Imagery and Base Maps_______İ",
    	inlandWaters: "ı_Inland Water Resources________İ",
    	location: "ı_Locations and Geodetic Networks__________İ",
    	intelligenceMilitary: "ı_Military___İ",
    	oceans: "ı_Oceans and Estuaries_______İ",
    	transportation: "ı_Transportation Networks________İ",
    	utilitiesCommunication: "ı_Utilities and Communication_________İ"
    },
    
    MI_ContextCode: {
    	caption: "ı_Context___İ",
    	acquisition: "ı_Acquisition____İ",
    	pass: "ı_Pass__İ",
    	wayPoint: "ı_Waypoint___İ"
    },
    
    MI_EnvironmentalRecord: {
    	caption: "ı_Environmental Conditions________İ",
    	averageAirTemperature: "ı_Average Air Temperature________İ",
    	maxRelativeHumidity: "ı_Maximum Relative Humidity_________İ",
    	maxAltitude: "ı_Maximum Altitude______İ",
    	meterologicalConditions: "ı_Meterological Conditions________İ"
    },
    
    MI_Event: {
    	identifier: "ı_Event Identifier______İ",
    	time: "ı_Time__İ",
    	expectedObjectiveReference: "ı_Expected Objective (Objective Identifer)_____________İ",
    	relatedSensorReference: "ı_Related Sensor (Instrument Identifer)____________İ",
    	relatedPassReference: "ı_Related Pass (Platform Pass Identifer)____________İ"
    },

    MI_GeometryTypeCode: {
    	point: "ı_Point___İ",
    	linear: "ı_Linear___İ",
    	areal: "ı_Areal___İ",
    	strip: "ı_Strip___İ"
    },
    
    MI_Instrument: {
    	citation: "ı_Instrument Citation_______İ",
    	identifier: "ı_Instrument Identifier_______İ",
    	sType: "ı_Instrument Type______İ",
    	description: "ı_Instrument Description________İ",
    	mountedOn: "ı_Mounted On____İ",
    	mountedOnPlatformReference: "ı_Mounted On (Platform Identifier)___________İ"
    },
    
    MI_Metadata: {
    	acquisitionInformation: "ı_Acquisition____İ"
    },
    
    MI_Objective: {
    	caption: "ı_Objective____İ",
    	identifier: "ı_Objective Identifier_______İ",
    	priority: "ı_Priority of Target______İ",
    	sFunction: "ı_Function of Objective_______İ",
    	extent: "ı_Extent___İ",
    	pass: "ı_Platform Pass_____İ",
    	sensingInstrumentReference: "ı_Sensing Instrument (Instrument Identifier)______________İ",
    	objectiveOccurrence: "ı_Events___İ",
    	sections: {
    		identification: "ı_Identification_____İ",
    		extent: "ı_Extent___İ",
    		pass: "ı_Pass__İ",
    		sensingInstrument: "ı_Sensing Instrument______İ",
    		objectiveOccurrence: "ı_Events___İ"
    	}
    },
    
    MI_ObjectiveTypeCode: {
    	caption: "ı_Type (Collection Technique for Objective)_____________İ",
    	instantaneousCollection: "ı_Instantaneous Collection________İ",
    	persistentView: "ı_Persistent View______İ",
    	survey: "ı_Survey___İ"
    },
    
    MI_Operation: {
    	caption: "ı_Operation____İ",
    	description: "ı_Operation Description_______İ",
    	citation: "ı_Operation Citation______İ",
    	identifier: "ı_Operation Identifier_______İ",
    	status: "ı_Operation Status______İ",
    	objectiveReference: "ı_Related Objective (Objective Identifier)_____________İ",
    	planReference: "ı_Related Plan (Plan Identifier)__________İ",
    	significantEventReference: "ı_Related Event (Event Identifier)___________İ",
    	platformReference: "ı_Related Platform (Platform Identifier)____________İ",
    	sections: {
    		identification: "ı_Identification_____İ",
    		related: "ı_Related___İ"
    	}
    },
    
    MI_OperationTypeCode: {
    	caption: "ı_Operation Type_____İ",
    	real: "ı_Real__İ",
    	simulated: "ı_Simulated____İ",
    	synthesized: "ı_Synthesized____İ"
    },
    
    MI_Plan: {
    	sType: "ı_Sampling Geometry for Collecting Data____________İ",
    	status: "ı_Status of Plan_____İ",
    	citation: "ı_Citation of Authority Requesting Collection______________İ",
    	satisfiedRequirementReference: "ı_Satisfied Requirement (Requirement Identifier)_______________İ",
    	operationReference: "ı_Related Operation (Operation Identifier)_____________İ"
    },
    
    MI_Platform: {
    	citation: "ı_Platform Citation______İ",
    	identifier: "ı_Platform Identifier_______İ",
    	description: "ı_Description of Platform Supporting the Instrument________________İ",
    	sponsor: "ı_Sponsor Organization for Platform___________İ",
    	instrument: "ı_Instrument(s) mounted on the platform____________İ",
    	instrumentReference: "ı_Instrument Identifier_______İ",
    	sections: {
    		identification: "ı_Identification_____İ",
    		sponsor: "ı_Sponsor___İ",
    		instruments: "ı_Instruments____İ"
    	}
    },
    
    MI_PlatformPass: {
    	identifier: "ı_Platform Pass Identifier________İ",
    	extent: "ı_Platform Pass Extent_______İ",
    	relatedEventReference: "ı_Related Event (Event Identifer)__________İ"
    },

    MI_PriorityCode: {
    	critical: "ı_Critical___İ", 
    	highImportance: "ı_High Importance______İ",
    	mediumImportance: "ı_Medium Importance______İ",
    	lowImportance: "ı_Low Importance_____İ"
    },
    
    MI_RequestedDate : {
    	requestedDateOfCollection: "ı_Requested Date Of Collection_________İ",
    	latestAcceptableDate: "ı_Latest Acceptable Date________İ"
    },
    
    MI_Requirement: {
    	caption: "ı_Requirement____İ",
    	citation: "ı_Citation for Requirement Guidance Material______________İ",
    	identifier: "ı_Requirement Identifier________İ",
    	requestor: "ı_Requestor of Requirement________İ",
    	recipient: "ı_Recipient of Requirement Results___________İ",
    	priority: "ı_Requirement Priority_______İ",
    	requestedDate: "ı_Requested Date_____İ",
    	expiryDate: "ı_Expiry Date____İ",
    	satisifiedPlanReference: "ı_Satisfied Plan (Plan Identifier)___________İ",
    	sections: {
    		identification: "ı_Identification_____İ",
    		requestor: "ı_Requestor____İ",
    		recipient: "ı_Recipient____İ",
    		priorityAndDates: "ı_Priority And Dates______İ",
    		satisifiedPlan: "ı_Satisified  Plan______İ"
    	}
    },
    
    MI_SequenceCode: {
    	caption: "ı_Sequence___İ",
    	start: "ı_Start___İ",
    	end: "ı_End__İ",
    	instantaneous: "ı_Instantaneous_____İ"
    },
    
    MI_TriggerCode: {
    	caption: "ı_Trigger___İ",
    	automatic: "ı_Automatic____İ",
    	manual: "ı_Manual___İ",
    	preProgrammed: "ı_Preprogrammed_____İ"
    },
    
    ObjectReference: {
    	uuidref: "ı_UUID Reference_____İ",
    	xlinkref: "ı_URL Reference_____İ"
    },
    
    RS_Identifier: {
    	caption: "ı_ID Plus Code Space______İ",
    	code: "ı_Code__İ",
    	codeSpace: "ı_Code Space____İ"
    },
    
    SV_CouplingType: {
    	loose: "ı_Loose___İ",
    	mixed: "ı_Mixed___İ",
    	tight: "ı_Tight___İ"
    },
    
    SV_OperationMetadata: {
    	operationName: "ı_Operation Name_____İ",
    	DCP: "ı_DCP__İ",
    	connectPoint: "ı_Connect Point_____İ"
    },
    
    SV_ServiceIdentification: {
    	serviceType: "ı_ServiceType____İ",
    	couplingType: "ı_Coupling Type_____İ",
    	containsOperations: "ı_Operation Metadata______İ",
    	operatesOn: "ı_Operates On____İ"
    },
    
    TM_Primitive: {
    	indeterminatePosition: "ı_Indeterminate Position________İ",
    	indeterminates: {
    		before: "ı_Before___İ",
       	after: "ı_After___İ",
      	now: "ı_Now__İ",
      	unknown: "ı_Unknown___İ"
    	}
    },
    
    gemet: {
    	concept: {
    		gemetConceptKeyword: "ı_GEMET Concept Keyword_______İ",
    		tool: "ı_Look Up____İ...",
    		dialogTitle: "ı_GEMET - Concept Keyword________İ",
    		searchLabel: "ı_Search___İ:",
    		searchTip: "ı_Search GEMET_____İ"
    	},
    	theme: {
    		tool: "ı_Look Up____İ...",
    		dialogTitle: "ı_GEMET - Inspire Data Theme_________İ"
    	},
    	ioerror: "ı_There was an error communicating with the GEMET service: {url}____________________İ",
    	searching: "ı_Searching GEMET______İ...",
    	noMatch: "ı_No matching results were found__________İ.",
      languages: {
      	"bg": "ı_Bulgarian____İ",
      	"cs": "ı_Czech___İ",
      	"da": "ı_Danish___İ",
      	"nl": "ı_Dutch___İ",
      	"en": "ı_English___İ",
      	"et": "ı_Estonian___İ",
      	"fi": "ı_Finnish___İ",
      	"fr": "ı_French___İ",
      	"de": "ı_German___İ",
      	"el": "ı_Greek___İ",
      	"hu": "ı_Hungarian____İ",
      	"ga": "ı_Gaelic (Irish)_____İ",
      	"it": "ı_Italian___İ",
      	"lv": "ı_Latvian___İ",
      	"lt": "ı_Lithuanian____İ",
      	"mt": "ı_Maltese___İ",
      	"pl": "ı_Polish___İ", 
      	"pt": "ı_Portuguese____İ",
      	"ro": "ı_Romanian___İ",
      	"sk": "ı_Slovak___İ",
      	"sl": "ı_Slovenian____İ",  	
      	"es": "ı_Spanish___İ",
      	"sv": "ı_Swedish___İ"
      }
    }
   
  })
);
