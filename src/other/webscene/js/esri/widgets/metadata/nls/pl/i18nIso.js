define(
   ({
  	
    documentTypes: {
    	data: {
    		caption: "ł_ISO 19115 (Data)______ą",
    		description: ""
    	},
    	service: {
    		caption: "ł_ISO 19119 (Service)_______ą",
    		description: ""
    	},
    	gmi: {
    		caption: "ł_ISO 19115-2 (Imagery and Gridded Data)____________ą",
    		description: ""
    	}
    },
    
    general: {
    	reference: "ł_Reference____ą"
    },
    
    sections: {
    	metadata: "ł_Metadata___ą",
    	identification: "ł_Identification_____ą",
    	distribution: "ł_Distribution_____ą",
    	quality: "ł_Quality___ą",
    	acquisition: "ł_Acquisition____ą"
    },
    
    metadataSection: {
    	identifier: "ł_Identifier____ą",
    	contact: "ł_Contact___ą",
    	date: "ł_Date__ą",
    	standard: "ł_Standard___ą",
    	reference: "ł_Reference____ą"
    },
    
    identificationSection: {
    	citation: "ł_Citation___ą",
    	description: "ł_Description____ą",
    	contact: "ł_Contact___ą",
    	thumbnail: "ł_Thumbnail____ą",
    	keywords: "ł_Keywords___ą",
    	constraints: "ł_Constraints____ą",
    	resource: "ł_Resource___ą",
    	resourceTab: {
    		representation: "ł_Representation_____ą",
    		language: "ł_Language___ą",
    		classification: "ł_Classification_____ą",
    		extent: "ł_Extent___ą"
    	},
    	serviceResourceTab: {
    		serviceType: "ł_Service Type_____ą",
    		extent: "ł_Extent___ą",
    		couplingType: "ł_Coupling Type_____ą",
    		operation: "ł_Operation____ą",
    		operatesOn: "ł_Operates On____ą"
    	}
    },
    
    distributionSection: {
    },
    
    qualitySection: {
    	scope: "ł_Scope___ą",
    	conformance: "ł_Conformance____ą",
    	lineage: "ł_Lineage___ą"
    },
    
    acquisitionSection: {
    	requirement: "ł_Requirement____ą",
    	objective: "ł_Objective____ą",
    	instrument: "ł_Instrument____ą",
    	plan: "ł_Plan__ą",
    	operation: "ł_Operation____ą",
    	platform: "ł_Platform___ą",
    	environment: "ł_Environment____ą"
    },
    
    AbstractMD_Identification: {
    	sAbstract: "ł_Abstract___ą",
    	purpose: "ł_Purpose___ą",
    	credit: "ł_Credits___ą",
    	pointOfContact: "ł_Point of Contact______ą",
    	resourceMaintenance: "ł_Maintenance____ą",
    	graphicOverview: "ł_Graphic Overview______ą",
    	descriptiveKeywords: "ł_Keyword Collection______ą",
    	resourceConstraints: "ł_Constraints____ą"
    },
    
    CI_Address: {
    	deliveryPoint: "ł_Delivery Point_____ą",
    	city: "ł_City__ą",
    	administrativeArea: "ł_Administrative Area_______ą",
    	postalCode: "ł_Postal Code____ą",
    	country: "ł_Country___ą",
    	electronicMailAddress: "ł_E-Mail Address_____ą"
    },
    
    CI_Citation: {
    	title: "ł_Title___ą",
    	alternateTitle: "ł_Alternate Title______ą",
    	identifier: "ł_Unique Resource Identifier_________ą",
    	resource: {
    		title: "ł_Resource Title_____ą",
    		date: "ł_Resource Date_____ą"
    	},
    	specification: {
    		title: "ł_Specification Title_______ą",
    		date: "ł_Specification Date______ą"
    	}
    },
    
    CI_Contact: {
    	phone: "ł_Phone___ą",
    	address: "ł_Address___ą",
    	onlineResource: "ł_Online Resource______ą",
    	hoursOfService: "ł_Hours of Service______ą",
    	contactInstructions: "ł_Contact Instructions_______ą"
    },
    
    CI_Date: {
    	date: "ł_Date__ą",
    	dateType: "ł_Date Type____ą"
    },
    
  	CI_DateTypeCode: {
  		caption: "ł_Date Type____ą",
  		creation: "ł_Creation Date_____ą",
  		publication: "ł_Publication Date______ą",
  		revision: "ł_Revision Date_____ą"
  	},
  	
    CI_OnLineFunctionCode: {
    	caption: "ł_Function___ą",
    	download: "ł_Download___ą",
    	information: "ł_Information____ą",
    	offlineAccess: "ł_Offline Access_____ą",
    	order: "ł_Order___ą",
    	search: "ł_Search___ą"
    },
    
    CI_OnlineResource: {
    	caption: "ł_Online Resource______ą",
    	linkage: "ł_URL__ą",
    	protocol: "ł_Protocol___ą",
    	applicationProfile: "ł_Application Profile_______ą",
    	name: "ł_Name__ą",
    	description: "ł_Description____ą",
    	sFunction: "ł_Function___ą"
    },
    
    CI_ResponsibleParty: {
    	caption: "ł_Point of Contact______ą",
    	individualName: "ł_Individual Name______ą",
    	organisationName: "ł_Organisation Name______ą",
    	positionName: "ł_Position Name_____ą",
    	contactInfo: "ł_Contact Info_____ą",
    	role: "ł_Role__ą"
    },
    
    CI_RoleCode: {
    	caption: "ł_Role__ą",
    	resourceProvider: "ł_Resource Provider______ą",
    	custodian: "ł_Custodian____ą",
    	owner: "ł_Owner___ą",
    	user: "ł_User__ą",
    	distributor: "ł_Distributor____ą",
    	originator: "ł_Originator____ą",
    	pointOfContact: "ł_Point of Contact______ą",
    	principalInvestigator: "ł_Principal Investigator________ą",
    	processor: "ł_Processor____ą",
    	publisher: "ł_Publisher____ą",
    	author: "ł_Author___ą"
    },
    
    CI_Telephone: {
    	voice: "ł_Voice___ą",
    	facsimile: "ł_Fax__ą"
    },
    
    DCPList: {
    	caption: "ł_DCP__ą",
    	XML: "ł_XML__ą",
    	CORBA: "ł_CORBA___ą",
    	JAVA: "ł_JAVA__ą",
    	COM: "ł_COM__ą",
    	SQL: "ł_SQL__ą",
    	WebServices: "ł_WebServices____ą"
    },
    
    DQ_ConformanceResult: {
    	caption: "ł_Conformance Result______ą",
    	explanation: "ł_Explanation____ą",
    	degree: {
    		caption: "ł_Degree___ą",
    		validationPerformed: "ł_Validation Performed_______ą",
    		conformant: "ł_Conformant____ą",
    		nonConformant: "ł_Non Conformant_____ą"
    	}
    },
    
    DQ_DataQuality: {
    	report: "ł_Report___ą"
    },
    
    DQ_Scope : {
    	level: "ł_Scope (quality information applies to)____________ą",
    	levelDescription: "ł_Level Description______ą"
    },
    
    EX_Extent: {
    	caption: "ł_Extent___ą",
    	description: "ł_Description____ą",
    	geographicElement: "ł_Spatial Extent_____ą",
    	temporalElement: "ł_Temporal Extent______ą",
    	verticalElement: "ł_Vertical Extent______ą"
    },
    
    EX_GeographicBoundingBox: {
    	westBoundLongitude: "ł_West Bounding Longitude________ą",
    	eastBoundLongitude: "ł_East Bounding Longitude________ą",
    	southBoundLatitude: "ł_South Bounding Latitude________ą",
    	northBoundLatitude: "ł_North Bounding Latitude________ą"
    },
    
    EX_GeographicDescription: {
    	caption: "ł_Geographic Description________ą"
    },
    
    EX_TemporalExtent: {
    	TimePeriod: {
    		beginPosition: "ł_Begin Date____ą",
    		endPosition: "ł_End Date___ą"
    	}
    },
    
    EX_VerticalExtent: {
    	minimumValue: "ł_Minimum Value_____ą",
    	maximumValue: "ł_Maximum Value_____ą",
    	verticalCRS: "ł_Vertical CRS_____ą"
    },
    
    Length: {
    	caption: "ł_Length___ą",
    	uom: "ł_Units of Measure______ą",
    	km: "ł_Kilometers____ą",
    	m: "ł_Meters___ą",
    	mi: "ł_Miles___ą",
    	ft: "ł_Feet__ą"
    },
    
    LI_Lineage: {
    	statement: "ł_Lineage Statement______ą"
    },
    
    MD_BrowseGraphic: {
    	fileName: "ł_Browse Graphic URL______ą",
    	fileDescription: "ł_Browse Graphic Caption________ą",
    	fileType: "ł_Browse Graphic Type_______ą"
    },
    
    MD_ClassificationCode: {
    	unclassified: "ł_Unclassified_____ą",
    	restricted: "ł_Restricted____ą",
    	confidential: "ł_Confidential_____ą",
    	secret: "ł_Secret___ą",
    	topSecret: "ł_Top Secret____ą"
    },
    
    MD_Constraints: {
    	caption: "ł_Usage Constraints______ą",
    	useLimitation: "ł_Use Limitation_____ą"
    },
    
    MD_DataIdentification: {
    	spatialRepresentationType: "ł_Spatial Representation Type_________ą",
    	spatialResolution: "ł_Spatial Resolution______ą",
    	language: "ł_Resource Language______ą",
    	supplementalInformation: "ł_Supplemental_____ą"
    },
    
    MD_DigitalTransferOptions: {
    	onLine: "ł_Online___ą"
    },
    
    MD_Distribution: {
    	distributionFormat: "ł_Distribution Format_______ą",
    	transferOptions: "ł_Transfer Options______ą"
    },
    
    MD_Format: {
    	name: "ł_Format Name____ą",
    	version: "ł_Format Version_____ą"
    },
    
    MD_Identifier: {
    	caption: "ł_URI__ą",
    	identifierCaption: "ł_Identifier____ą",
    	code: "ł_Code__ą"
    },
    
    MD_Keywords: {
    	delimitedCaption: "ł_Keywords___ą",
    	thesaurusName: "ł_Associated Thesaurus_______ą"
    },
    
    MD_KeywordTypeCode: {
    	caption: "ł_Keyword Type_____ą",
    	discipline: "ł_Discipline____ą",
    	place: "ł_Place___ą",
    	stratum: "ł_Stratum___ą",
    	temporal: "ł_Temporal___ą",
    	theme: "ł_Theme___ą"
    },
    
    MD_LegalConstraints: {
    	caption: "ł_Legal Constraints______ą",
    	accessConstraints: "ł_Access Constraints______ą",
    	useConstraints: "ł_Use Constraints______ą",
    	otherConstraints: "ł_Other Constraints______ą"
    },
    
    MD_MaintenanceFrequencyCode: {
    	caption: "ł_Frequency____ą",
    	continual: "ł_Continual____ą",
    	daily: "ł_Daily___ą",
    	weekly: "ł_Weekly___ą",
    	fortnightly: "ł_Fortnightly____ą",
    	monthly: "ł_Monthly___ą",
    	quarterly: "ł_Quarterly____ą",
    	biannually: "ł_Biannually____ą",
    	annually: "ł_Annually___ą",
    	asNeeded: "ł_As Needed____ą",
    	irregular: "ł_Irregular____ą",
    	notPlanned: "ł_Not Planned____ą",
    	unknown: "ł_Unknown___ą"
    },
    
    MD_Metadata: {
    	caption: "ł_Metadata___ą",
    	fileIdentifier: "ł_File Identifier______ą",
    	language: "ł_Metadata Language______ą",
    	hierarchyLevel: "ł_Hierarchy Level______ą",
    	hierarchyLevelName: "ł_Hierarchy Level Name_______ą",
    	contact: "ł_Metadata Contact______ą",
    	dateStamp: "ł_Metadata Date_____ą",
    	metadataStandardName: "ł_Metadata Standard Name________ą",
    	metadataStandardVersion: "ł_Metadata Standard Version_________ą",
    	referenceSystemInfo: "ł_Reference System______ą",
    	identificationInfo: "ł_Identification_____ą",
    	distributionInfo: "ł_Distribution_____ą",
    	dataQualityInfo: "ł_Quality___ą"
    },
    
    MD_ProgressCode: {
    	caption: "ł_Progress Code_____ą",
    	completed: "ł_Completed____ą",
    	historicalArchive: "ł_Historical Archive______ą",
    	obsolete: "ł_Obsolete___ą",
    	onGoing: "ł_On Going___ą",
    	planned: "ł_Planned___ą",
    	required: "ł_Required___ą",
    	underDevelopment: "ł_Under Development______ą"
    },
    
    MD_RepresentativeFraction: {
    	denominator: "ł_Denominator____ą"
    },
    
    MD_Resolution: {
    	equivalentScale: "ł_Equivalent Scale______ą",
    	distance: "ł_Distance___ą"
    },
    
    MD_RestrictionCode: {
    	copyright: "ł_Copyright____ą",
    	patent: "ł_Patent___ą",
    	patentPending: "ł_Patent Pending_____ą",
    	trademark: "ł_Trademark____ą",
    	license: "ł_License___ą",
    	intellectualPropertyRights: "ł_Intellectual Property Rights_________ą",
    	restricted: "ł_Restricted____ą",
    	otherRestrictions: "ł_Other Restrictions______ą"
    },
    
    MD_ScopeCode: {
    	attribute: "ł_Attribute____ą",
    	attributeType: "ł_Attribute type_____ą",
    	collectionHardware: "ł_Collection hardware_______ą",
    	collectionSession: "ł_Collection session______ą",
    	dataset: "ł_Dataset___ą",
    	series: "ł_Series___ą",
    	nonGeographicDataset: "ł_Non geographic dataset________ą",
    	dimensionGroup: "ł_Dimension group______ą",
    	feature: "ł_Feature___ą",
    	featureType: "ł_Feature type_____ą",
    	propertyType: "ł_Property type_____ą",
    	fieldSession: "ł_Field session_____ą",
    	software: "ł_Software___ą",
    	service: "ł_Service___ą",
    	model: "ł_Model___ą",
    	tile: "ł_Tile__ą"
    },
    
    MD_ScopeDescription: {
    	attributes: "ł_Attributes____ą",
    	features: "ł_Features___ą",
    	featureInstances: "ł_Feature Instances______ą",
    	attributeInstances: "ł_Attribute Instances_______ą",
    	dataset: "ł_Dataset___ą",
    	other: "ł_Other___ą"
    },
    
    MD_SecurityConstraints: {
    	caption: "ł_Security Constraints_______ą",
    	classification: "ł_Classification_____ą",
    	userNote: "ł_User Note____ą",
    	classificationSystem: "ł_Classification System_______ą",
    	handlingDescription: "ł_Handling Description_______ą"
    },
    
    MD_SpatialRepresentationTypeCode: {
    	caption: "ł_Spatial Representation Type_________ą",
    	vector: "ł_Vector___ą",
    	grid: "ł_Grid__ą",
    	textTable: "ł_Text Table____ą",
    	tin: "ł_TIN__ą",
    	stereoModel: "ł_Stereo Model_____ą",
    	video: "ł_Video___ą"
    },
    
    MD_TopicCategoryCode: {
    	caption: "ł_Topic Category_____ą",
    	boundaries: "ł_Administrative and Political Boundaries_____________ą",
    	farming: "ł_Agriculture and Farming________ą",
    	climatologyMeteorologyAtmosphere: "ł_Atmosphere and Climatic________ą",
    	biota: "ł_Biology and Ecology_______ą",
    	economy: "ł_Business and Economic_______ą",
    	planningCadastre: "ł_Cadastral____ą",
    	society: "ł_Cultural, Society and Demography___________ą",
    	elevation: "ł_Elevation and Derived Products__________ą",
    	environment: "ł_Environment and Conservation_________ą",
    	structure: "ł_Facilities and Structures_________ą",
    	geoscientificInformation: "ł_Geological and Geophysical_________ą",
    	health: "ł_Human Health and Disease________ą",
    	imageryBaseMapsEarthCover: "ł_Imagery and Base Maps_______ą",
    	inlandWaters: "ł_Inland Water Resources________ą",
    	location: "ł_Locations and Geodetic Networks__________ą",
    	intelligenceMilitary: "ł_Military___ą",
    	oceans: "ł_Oceans and Estuaries_______ą",
    	transportation: "ł_Transportation Networks________ą",
    	utilitiesCommunication: "ł_Utilities and Communication_________ą"
    },
    
    MI_ContextCode: {
    	caption: "ł_Context___ą",
    	acquisition: "ł_Acquisition____ą",
    	pass: "ł_Pass__ą",
    	wayPoint: "ł_Waypoint___ą"
    },
    
    MI_EnvironmentalRecord: {
    	caption: "ł_Environmental Conditions________ą",
    	averageAirTemperature: "ł_Average Air Temperature________ą",
    	maxRelativeHumidity: "ł_Maximum Relative Humidity_________ą",
    	maxAltitude: "ł_Maximum Altitude______ą",
    	meterologicalConditions: "ł_Meterological Conditions________ą"
    },
    
    MI_Event: {
    	identifier: "ł_Event Identifier______ą",
    	time: "ł_Time__ą",
    	expectedObjectiveReference: "ł_Expected Objective (Objective Identifer)_____________ą",
    	relatedSensorReference: "ł_Related Sensor (Instrument Identifer)____________ą",
    	relatedPassReference: "ł_Related Pass (Platform Pass Identifer)____________ą"
    },

    MI_GeometryTypeCode: {
    	point: "ł_Point___ą",
    	linear: "ł_Linear___ą",
    	areal: "ł_Areal___ą",
    	strip: "ł_Strip___ą"
    },
    
    MI_Instrument: {
    	citation: "ł_Instrument Citation_______ą",
    	identifier: "ł_Instrument Identifier_______ą",
    	sType: "ł_Instrument Type______ą",
    	description: "ł_Instrument Description________ą",
    	mountedOn: "ł_Mounted On____ą",
    	mountedOnPlatformReference: "ł_Mounted On (Platform Identifier)___________ą"
    },
    
    MI_Metadata: {
    	acquisitionInformation: "ł_Acquisition____ą"
    },
    
    MI_Objective: {
    	caption: "ł_Objective____ą",
    	identifier: "ł_Objective Identifier_______ą",
    	priority: "ł_Priority of Target______ą",
    	sFunction: "ł_Function of Objective_______ą",
    	extent: "ł_Extent___ą",
    	pass: "ł_Platform Pass_____ą",
    	sensingInstrumentReference: "ł_Sensing Instrument (Instrument Identifier)______________ą",
    	objectiveOccurrence: "ł_Events___ą",
    	sections: {
    		identification: "ł_Identification_____ą",
    		extent: "ł_Extent___ą",
    		pass: "ł_Pass__ą",
    		sensingInstrument: "ł_Sensing Instrument______ą",
    		objectiveOccurrence: "ł_Events___ą"
    	}
    },
    
    MI_ObjectiveTypeCode: {
    	caption: "ł_Type (Collection Technique for Objective)_____________ą",
    	instantaneousCollection: "ł_Instantaneous Collection________ą",
    	persistentView: "ł_Persistent View______ą",
    	survey: "ł_Survey___ą"
    },
    
    MI_Operation: {
    	caption: "ł_Operation____ą",
    	description: "ł_Operation Description_______ą",
    	citation: "ł_Operation Citation______ą",
    	identifier: "ł_Operation Identifier_______ą",
    	status: "ł_Operation Status______ą",
    	objectiveReference: "ł_Related Objective (Objective Identifier)_____________ą",
    	planReference: "ł_Related Plan (Plan Identifier)__________ą",
    	significantEventReference: "ł_Related Event (Event Identifier)___________ą",
    	platformReference: "ł_Related Platform (Platform Identifier)____________ą",
    	sections: {
    		identification: "ł_Identification_____ą",
    		related: "ł_Related___ą"
    	}
    },
    
    MI_OperationTypeCode: {
    	caption: "ł_Operation Type_____ą",
    	real: "ł_Real__ą",
    	simulated: "ł_Simulated____ą",
    	synthesized: "ł_Synthesized____ą"
    },
    
    MI_Plan: {
    	sType: "ł_Sampling Geometry for Collecting Data____________ą",
    	status: "ł_Status of Plan_____ą",
    	citation: "ł_Citation of Authority Requesting Collection______________ą",
    	satisfiedRequirementReference: "ł_Satisfied Requirement (Requirement Identifier)_______________ą",
    	operationReference: "ł_Related Operation (Operation Identifier)_____________ą"
    },
    
    MI_Platform: {
    	citation: "ł_Platform Citation______ą",
    	identifier: "ł_Platform Identifier_______ą",
    	description: "ł_Description of Platform Supporting the Instrument________________ą",
    	sponsor: "ł_Sponsor Organization for Platform___________ą",
    	instrument: "ł_Instrument(s) mounted on the platform____________ą",
    	instrumentReference: "ł_Instrument Identifier_______ą",
    	sections: {
    		identification: "ł_Identification_____ą",
    		sponsor: "ł_Sponsor___ą",
    		instruments: "ł_Instruments____ą"
    	}
    },
    
    MI_PlatformPass: {
    	identifier: "ł_Platform Pass Identifier________ą",
    	extent: "ł_Platform Pass Extent_______ą",
    	relatedEventReference: "ł_Related Event (Event Identifer)__________ą"
    },

    MI_PriorityCode: {
    	critical: "ł_Critical___ą", 
    	highImportance: "ł_High Importance______ą",
    	mediumImportance: "ł_Medium Importance______ą",
    	lowImportance: "ł_Low Importance_____ą"
    },
    
    MI_RequestedDate : {
    	requestedDateOfCollection: "ł_Requested Date Of Collection_________ą",
    	latestAcceptableDate: "ł_Latest Acceptable Date________ą"
    },
    
    MI_Requirement: {
    	caption: "ł_Requirement____ą",
    	citation: "ł_Citation for Requirement Guidance Material______________ą",
    	identifier: "ł_Requirement Identifier________ą",
    	requestor: "ł_Requestor of Requirement________ą",
    	recipient: "ł_Recipient of Requirement Results___________ą",
    	priority: "ł_Requirement Priority_______ą",
    	requestedDate: "ł_Requested Date_____ą",
    	expiryDate: "ł_Expiry Date____ą",
    	satisifiedPlanReference: "ł_Satisfied Plan (Plan Identifier)___________ą",
    	sections: {
    		identification: "ł_Identification_____ą",
    		requestor: "ł_Requestor____ą",
    		recipient: "ł_Recipient____ą",
    		priorityAndDates: "ł_Priority And Dates______ą",
    		satisifiedPlan: "ł_Satisified  Plan______ą"
    	}
    },
    
    MI_SequenceCode: {
    	caption: "ł_Sequence___ą",
    	start: "ł_Start___ą",
    	end: "ł_End__ą",
    	instantaneous: "ł_Instantaneous_____ą"
    },
    
    MI_TriggerCode: {
    	caption: "ł_Trigger___ą",
    	automatic: "ł_Automatic____ą",
    	manual: "ł_Manual___ą",
    	preProgrammed: "ł_Preprogrammed_____ą"
    },
    
    ObjectReference: {
    	uuidref: "ł_UUID Reference_____ą",
    	xlinkref: "ł_URL Reference_____ą"
    },
    
    RS_Identifier: {
    	caption: "ł_ID Plus Code Space______ą",
    	code: "ł_Code__ą",
    	codeSpace: "ł_Code Space____ą"
    },
    
    SV_CouplingType: {
    	loose: "ł_Loose___ą",
    	mixed: "ł_Mixed___ą",
    	tight: "ł_Tight___ą"
    },
    
    SV_OperationMetadata: {
    	operationName: "ł_Operation Name_____ą",
    	DCP: "ł_DCP__ą",
    	connectPoint: "ł_Connect Point_____ą"
    },
    
    SV_ServiceIdentification: {
    	serviceType: "ł_ServiceType____ą",
    	couplingType: "ł_Coupling Type_____ą",
    	containsOperations: "ł_Operation Metadata______ą",
    	operatesOn: "ł_Operates On____ą"
    },
    
    TM_Primitive: {
    	indeterminatePosition: "ł_Indeterminate Position________ą",
    	indeterminates: {
    		before: "ł_Before___ą",
       	after: "ł_After___ą",
      	now: "ł_Now__ą",
      	unknown: "ł_Unknown___ą"
    	}
    },
    
    gemet: {
    	concept: {
    		gemetConceptKeyword: "ł_GEMET Concept Keyword_______ą",
    		tool: "ł_Look Up____ą...",
    		dialogTitle: "ł_GEMET - Concept Keyword________ą",
    		searchLabel: "ł_Search___ą:",
    		searchTip: "ł_Search GEMET_____ą"
    	},
    	theme: {
    		tool: "ł_Look Up____ą...",
    		dialogTitle: "ł_GEMET - Inspire Data Theme_________ą"
    	},
    	ioerror: "ł_There was an error communicating with the GEMET service: {url}____________________ą",
    	searching: "ł_Searching GEMET______ą...",
    	noMatch: "ł_No matching results were found__________ą.",
      languages: {
      	"bg": "ł_Bulgarian____ą",
      	"cs": "ł_Czech___ą",
      	"da": "ł_Danish___ą",
      	"nl": "ł_Dutch___ą",
      	"en": "ł_English___ą",
      	"et": "ł_Estonian___ą",
      	"fi": "ł_Finnish___ą",
      	"fr": "ł_French___ą",
      	"de": "ł_German___ą",
      	"el": "ł_Greek___ą",
      	"hu": "ł_Hungarian____ą",
      	"ga": "ł_Gaelic (Irish)_____ą",
      	"it": "ł_Italian___ą",
      	"lv": "ł_Latvian___ą",
      	"lt": "ł_Lithuanian____ą",
      	"mt": "ł_Maltese___ą",
      	"pl": "ł_Polish___ą", 
      	"pt": "ł_Portuguese____ą",
      	"ro": "ł_Romanian___ą",
      	"sk": "ł_Slovak___ą",
      	"sl": "ł_Slovenian____ą",  	
      	"es": "ł_Spanish___ą",
      	"sv": "ł_Swedish___ą"
      }
    }
   
  })
);
