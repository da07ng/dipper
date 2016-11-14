define(
   ({
  	
    documentTypes: {
    	data: {
    		caption: "ก้_ISO 19115 (Data)______ษฺ",
    		description: ""
    	},
    	service: {
    		caption: "ก้_ISO 19119 (Service)_______ษฺ",
    		description: ""
    	},
    	gmi: {
    		caption: "ก้_ISO 19115-2 (Imagery and Gridded Data)____________ษฺ",
    		description: ""
    	}
    },
    
    general: {
    	reference: "ก้_Reference____ษฺ"
    },
    
    sections: {
    	metadata: "ก้_Metadata___ษฺ",
    	identification: "ก้_Identification_____ษฺ",
    	distribution: "ก้_Distribution_____ษฺ",
    	quality: "ก้_Quality___ษฺ",
    	acquisition: "ก้_Acquisition____ษฺ"
    },
    
    metadataSection: {
    	identifier: "ก้_Identifier____ษฺ",
    	contact: "ก้_Contact___ษฺ",
    	date: "ก้_Date__ษฺ",
    	standard: "ก้_Standard___ษฺ",
    	reference: "ก้_Reference____ษฺ"
    },
    
    identificationSection: {
    	citation: "ก้_Citation___ษฺ",
    	description: "ก้_Description____ษฺ",
    	contact: "ก้_Contact___ษฺ",
    	thumbnail: "ก้_Thumbnail____ษฺ",
    	keywords: "ก้_Keywords___ษฺ",
    	constraints: "ก้_Constraints____ษฺ",
    	resource: "ก้_Resource___ษฺ",
    	resourceTab: {
    		representation: "ก้_Representation_____ษฺ",
    		language: "ก้_Language___ษฺ",
    		classification: "ก้_Classification_____ษฺ",
    		extent: "ก้_Extent___ษฺ"
    	},
    	serviceResourceTab: {
    		serviceType: "ก้_Service Type_____ษฺ",
    		extent: "ก้_Extent___ษฺ",
    		couplingType: "ก้_Coupling Type_____ษฺ",
    		operation: "ก้_Operation____ษฺ",
    		operatesOn: "ก้_Operates On____ษฺ"
    	}
    },
    
    distributionSection: {
    },
    
    qualitySection: {
    	scope: "ก้_Scope___ษฺ",
    	conformance: "ก้_Conformance____ษฺ",
    	lineage: "ก้_Lineage___ษฺ"
    },
    
    acquisitionSection: {
    	requirement: "ก้_Requirement____ษฺ",
    	objective: "ก้_Objective____ษฺ",
    	instrument: "ก้_Instrument____ษฺ",
    	plan: "ก้_Plan__ษฺ",
    	operation: "ก้_Operation____ษฺ",
    	platform: "ก้_Platform___ษฺ",
    	environment: "ก้_Environment____ษฺ"
    },
    
    AbstractMD_Identification: {
    	sAbstract: "ก้_Abstract___ษฺ",
    	purpose: "ก้_Purpose___ษฺ",
    	credit: "ก้_Credits___ษฺ",
    	pointOfContact: "ก้_Point of Contact______ษฺ",
    	resourceMaintenance: "ก้_Maintenance____ษฺ",
    	graphicOverview: "ก้_Graphic Overview______ษฺ",
    	descriptiveKeywords: "ก้_Keyword Collection______ษฺ",
    	resourceConstraints: "ก้_Constraints____ษฺ"
    },
    
    CI_Address: {
    	deliveryPoint: "ก้_Delivery Point_____ษฺ",
    	city: "ก้_City__ษฺ",
    	administrativeArea: "ก้_Administrative Area_______ษฺ",
    	postalCode: "ก้_Postal Code____ษฺ",
    	country: "ก้_Country___ษฺ",
    	electronicMailAddress: "ก้_E-Mail Address_____ษฺ"
    },
    
    CI_Citation: {
    	title: "ก้_Title___ษฺ",
    	alternateTitle: "ก้_Alternate Title______ษฺ",
    	identifier: "ก้_Unique Resource Identifier_________ษฺ",
    	resource: {
    		title: "ก้_Resource Title_____ษฺ",
    		date: "ก้_Resource Date_____ษฺ"
    	},
    	specification: {
    		title: "ก้_Specification Title_______ษฺ",
    		date: "ก้_Specification Date______ษฺ"
    	}
    },
    
    CI_Contact: {
    	phone: "ก้_Phone___ษฺ",
    	address: "ก้_Address___ษฺ",
    	onlineResource: "ก้_Online Resource______ษฺ",
    	hoursOfService: "ก้_Hours of Service______ษฺ",
    	contactInstructions: "ก้_Contact Instructions_______ษฺ"
    },
    
    CI_Date: {
    	date: "ก้_Date__ษฺ",
    	dateType: "ก้_Date Type____ษฺ"
    },
    
  	CI_DateTypeCode: {
  		caption: "ก้_Date Type____ษฺ",
  		creation: "ก้_Creation Date_____ษฺ",
  		publication: "ก้_Publication Date______ษฺ",
  		revision: "ก้_Revision Date_____ษฺ"
  	},
  	
    CI_OnLineFunctionCode: {
    	caption: "ก้_Function___ษฺ",
    	download: "ก้_Download___ษฺ",
    	information: "ก้_Information____ษฺ",
    	offlineAccess: "ก้_Offline Access_____ษฺ",
    	order: "ก้_Order___ษฺ",
    	search: "ก้_Search___ษฺ"
    },
    
    CI_OnlineResource: {
    	caption: "ก้_Online Resource______ษฺ",
    	linkage: "ก้_URL__ษฺ",
    	protocol: "ก้_Protocol___ษฺ",
    	applicationProfile: "ก้_Application Profile_______ษฺ",
    	name: "ก้_Name__ษฺ",
    	description: "ก้_Description____ษฺ",
    	sFunction: "ก้_Function___ษฺ"
    },
    
    CI_ResponsibleParty: {
    	caption: "ก้_Point of Contact______ษฺ",
    	individualName: "ก้_Individual Name______ษฺ",
    	organisationName: "ก้_Organisation Name______ษฺ",
    	positionName: "ก้_Position Name_____ษฺ",
    	contactInfo: "ก้_Contact Info_____ษฺ",
    	role: "ก้_Role__ษฺ"
    },
    
    CI_RoleCode: {
    	caption: "ก้_Role__ษฺ",
    	resourceProvider: "ก้_Resource Provider______ษฺ",
    	custodian: "ก้_Custodian____ษฺ",
    	owner: "ก้_Owner___ษฺ",
    	user: "ก้_User__ษฺ",
    	distributor: "ก้_Distributor____ษฺ",
    	originator: "ก้_Originator____ษฺ",
    	pointOfContact: "ก้_Point of Contact______ษฺ",
    	principalInvestigator: "ก้_Principal Investigator________ษฺ",
    	processor: "ก้_Processor____ษฺ",
    	publisher: "ก้_Publisher____ษฺ",
    	author: "ก้_Author___ษฺ"
    },
    
    CI_Telephone: {
    	voice: "ก้_Voice___ษฺ",
    	facsimile: "ก้_Fax__ษฺ"
    },
    
    DCPList: {
    	caption: "ก้_DCP__ษฺ",
    	XML: "ก้_XML__ษฺ",
    	CORBA: "ก้_CORBA___ษฺ",
    	JAVA: "ก้_JAVA__ษฺ",
    	COM: "ก้_COM__ษฺ",
    	SQL: "ก้_SQL__ษฺ",
    	WebServices: "ก้_WebServices____ษฺ"
    },
    
    DQ_ConformanceResult: {
    	caption: "ก้_Conformance Result______ษฺ",
    	explanation: "ก้_Explanation____ษฺ",
    	degree: {
    		caption: "ก้_Degree___ษฺ",
    		validationPerformed: "ก้_Validation Performed_______ษฺ",
    		conformant: "ก้_Conformant____ษฺ",
    		nonConformant: "ก้_Non Conformant_____ษฺ"
    	}
    },
    
    DQ_DataQuality: {
    	report: "ก้_Report___ษฺ"
    },
    
    DQ_Scope : {
    	level: "ก้_Scope (quality information applies to)____________ษฺ",
    	levelDescription: "ก้_Level Description______ษฺ"
    },
    
    EX_Extent: {
    	caption: "ก้_Extent___ษฺ",
    	description: "ก้_Description____ษฺ",
    	geographicElement: "ก้_Spatial Extent_____ษฺ",
    	temporalElement: "ก้_Temporal Extent______ษฺ",
    	verticalElement: "ก้_Vertical Extent______ษฺ"
    },
    
    EX_GeographicBoundingBox: {
    	westBoundLongitude: "ก้_West Bounding Longitude________ษฺ",
    	eastBoundLongitude: "ก้_East Bounding Longitude________ษฺ",
    	southBoundLatitude: "ก้_South Bounding Latitude________ษฺ",
    	northBoundLatitude: "ก้_North Bounding Latitude________ษฺ"
    },
    
    EX_GeographicDescription: {
    	caption: "ก้_Geographic Description________ษฺ"
    },
    
    EX_TemporalExtent: {
    	TimePeriod: {
    		beginPosition: "ก้_Begin Date____ษฺ",
    		endPosition: "ก้_End Date___ษฺ"
    	}
    },
    
    EX_VerticalExtent: {
    	minimumValue: "ก้_Minimum Value_____ษฺ",
    	maximumValue: "ก้_Maximum Value_____ษฺ",
    	verticalCRS: "ก้_Vertical CRS_____ษฺ"
    },
    
    Length: {
    	caption: "ก้_Length___ษฺ",
    	uom: "ก้_Units of Measure______ษฺ",
    	km: "ก้_Kilometers____ษฺ",
    	m: "ก้_Meters___ษฺ",
    	mi: "ก้_Miles___ษฺ",
    	ft: "ก้_Feet__ษฺ"
    },
    
    LI_Lineage: {
    	statement: "ก้_Lineage Statement______ษฺ"
    },
    
    MD_BrowseGraphic: {
    	fileName: "ก้_Browse Graphic URL______ษฺ",
    	fileDescription: "ก้_Browse Graphic Caption________ษฺ",
    	fileType: "ก้_Browse Graphic Type_______ษฺ"
    },
    
    MD_ClassificationCode: {
    	unclassified: "ก้_Unclassified_____ษฺ",
    	restricted: "ก้_Restricted____ษฺ",
    	confidential: "ก้_Confidential_____ษฺ",
    	secret: "ก้_Secret___ษฺ",
    	topSecret: "ก้_Top Secret____ษฺ"
    },
    
    MD_Constraints: {
    	caption: "ก้_Usage Constraints______ษฺ",
    	useLimitation: "ก้_Use Limitation_____ษฺ"
    },
    
    MD_DataIdentification: {
    	spatialRepresentationType: "ก้_Spatial Representation Type_________ษฺ",
    	spatialResolution: "ก้_Spatial Resolution______ษฺ",
    	language: "ก้_Resource Language______ษฺ",
    	supplementalInformation: "ก้_Supplemental_____ษฺ"
    },
    
    MD_DigitalTransferOptions: {
    	onLine: "ก้_Online___ษฺ"
    },
    
    MD_Distribution: {
    	distributionFormat: "ก้_Distribution Format_______ษฺ",
    	transferOptions: "ก้_Transfer Options______ษฺ"
    },
    
    MD_Format: {
    	name: "ก้_Format Name____ษฺ",
    	version: "ก้_Format Version_____ษฺ"
    },
    
    MD_Identifier: {
    	caption: "ก้_URI__ษฺ",
    	identifierCaption: "ก้_Identifier____ษฺ",
    	code: "ก้_Code__ษฺ"
    },
    
    MD_Keywords: {
    	delimitedCaption: "ก้_Keywords___ษฺ",
    	thesaurusName: "ก้_Associated Thesaurus_______ษฺ"
    },
    
    MD_KeywordTypeCode: {
    	caption: "ก้_Keyword Type_____ษฺ",
    	discipline: "ก้_Discipline____ษฺ",
    	place: "ก้_Place___ษฺ",
    	stratum: "ก้_Stratum___ษฺ",
    	temporal: "ก้_Temporal___ษฺ",
    	theme: "ก้_Theme___ษฺ"
    },
    
    MD_LegalConstraints: {
    	caption: "ก้_Legal Constraints______ษฺ",
    	accessConstraints: "ก้_Access Constraints______ษฺ",
    	useConstraints: "ก้_Use Constraints______ษฺ",
    	otherConstraints: "ก้_Other Constraints______ษฺ"
    },
    
    MD_MaintenanceFrequencyCode: {
    	caption: "ก้_Frequency____ษฺ",
    	continual: "ก้_Continual____ษฺ",
    	daily: "ก้_Daily___ษฺ",
    	weekly: "ก้_Weekly___ษฺ",
    	fortnightly: "ก้_Fortnightly____ษฺ",
    	monthly: "ก้_Monthly___ษฺ",
    	quarterly: "ก้_Quarterly____ษฺ",
    	biannually: "ก้_Biannually____ษฺ",
    	annually: "ก้_Annually___ษฺ",
    	asNeeded: "ก้_As Needed____ษฺ",
    	irregular: "ก้_Irregular____ษฺ",
    	notPlanned: "ก้_Not Planned____ษฺ",
    	unknown: "ก้_Unknown___ษฺ"
    },
    
    MD_Metadata: {
    	caption: "ก้_Metadata___ษฺ",
    	fileIdentifier: "ก้_File Identifier______ษฺ",
    	language: "ก้_Metadata Language______ษฺ",
    	hierarchyLevel: "ก้_Hierarchy Level______ษฺ",
    	hierarchyLevelName: "ก้_Hierarchy Level Name_______ษฺ",
    	contact: "ก้_Metadata Contact______ษฺ",
    	dateStamp: "ก้_Metadata Date_____ษฺ",
    	metadataStandardName: "ก้_Metadata Standard Name________ษฺ",
    	metadataStandardVersion: "ก้_Metadata Standard Version_________ษฺ",
    	referenceSystemInfo: "ก้_Reference System______ษฺ",
    	identificationInfo: "ก้_Identification_____ษฺ",
    	distributionInfo: "ก้_Distribution_____ษฺ",
    	dataQualityInfo: "ก้_Quality___ษฺ"
    },
    
    MD_ProgressCode: {
    	caption: "ก้_Progress Code_____ษฺ",
    	completed: "ก้_Completed____ษฺ",
    	historicalArchive: "ก้_Historical Archive______ษฺ",
    	obsolete: "ก้_Obsolete___ษฺ",
    	onGoing: "ก้_On Going___ษฺ",
    	planned: "ก้_Planned___ษฺ",
    	required: "ก้_Required___ษฺ",
    	underDevelopment: "ก้_Under Development______ษฺ"
    },
    
    MD_RepresentativeFraction: {
    	denominator: "ก้_Denominator____ษฺ"
    },
    
    MD_Resolution: {
    	equivalentScale: "ก้_Equivalent Scale______ษฺ",
    	distance: "ก้_Distance___ษฺ"
    },
    
    MD_RestrictionCode: {
    	copyright: "ก้_Copyright____ษฺ",
    	patent: "ก้_Patent___ษฺ",
    	patentPending: "ก้_Patent Pending_____ษฺ",
    	trademark: "ก้_Trademark____ษฺ",
    	license: "ก้_License___ษฺ",
    	intellectualPropertyRights: "ก้_Intellectual Property Rights_________ษฺ",
    	restricted: "ก้_Restricted____ษฺ",
    	otherRestrictions: "ก้_Other Restrictions______ษฺ"
    },
    
    MD_ScopeCode: {
    	attribute: "ก้_Attribute____ษฺ",
    	attributeType: "ก้_Attribute type_____ษฺ",
    	collectionHardware: "ก้_Collection hardware_______ษฺ",
    	collectionSession: "ก้_Collection session______ษฺ",
    	dataset: "ก้_Dataset___ษฺ",
    	series: "ก้_Series___ษฺ",
    	nonGeographicDataset: "ก้_Non geographic dataset________ษฺ",
    	dimensionGroup: "ก้_Dimension group______ษฺ",
    	feature: "ก้_Feature___ษฺ",
    	featureType: "ก้_Feature type_____ษฺ",
    	propertyType: "ก้_Property type_____ษฺ",
    	fieldSession: "ก้_Field session_____ษฺ",
    	software: "ก้_Software___ษฺ",
    	service: "ก้_Service___ษฺ",
    	model: "ก้_Model___ษฺ",
    	tile: "ก้_Tile__ษฺ"
    },
    
    MD_ScopeDescription: {
    	attributes: "ก้_Attributes____ษฺ",
    	features: "ก้_Features___ษฺ",
    	featureInstances: "ก้_Feature Instances______ษฺ",
    	attributeInstances: "ก้_Attribute Instances_______ษฺ",
    	dataset: "ก้_Dataset___ษฺ",
    	other: "ก้_Other___ษฺ"
    },
    
    MD_SecurityConstraints: {
    	caption: "ก้_Security Constraints_______ษฺ",
    	classification: "ก้_Classification_____ษฺ",
    	userNote: "ก้_User Note____ษฺ",
    	classificationSystem: "ก้_Classification System_______ษฺ",
    	handlingDescription: "ก้_Handling Description_______ษฺ"
    },
    
    MD_SpatialRepresentationTypeCode: {
    	caption: "ก้_Spatial Representation Type_________ษฺ",
    	vector: "ก้_Vector___ษฺ",
    	grid: "ก้_Grid__ษฺ",
    	textTable: "ก้_Text Table____ษฺ",
    	tin: "ก้_TIN__ษฺ",
    	stereoModel: "ก้_Stereo Model_____ษฺ",
    	video: "ก้_Video___ษฺ"
    },
    
    MD_TopicCategoryCode: {
    	caption: "ก้_Topic Category_____ษฺ",
    	boundaries: "ก้_Administrative and Political Boundaries_____________ษฺ",
    	farming: "ก้_Agriculture and Farming________ษฺ",
    	climatologyMeteorologyAtmosphere: "ก้_Atmosphere and Climatic________ษฺ",
    	biota: "ก้_Biology and Ecology_______ษฺ",
    	economy: "ก้_Business and Economic_______ษฺ",
    	planningCadastre: "ก้_Cadastral____ษฺ",
    	society: "ก้_Cultural, Society and Demography___________ษฺ",
    	elevation: "ก้_Elevation and Derived Products__________ษฺ",
    	environment: "ก้_Environment and Conservation_________ษฺ",
    	structure: "ก้_Facilities and Structures_________ษฺ",
    	geoscientificInformation: "ก้_Geological and Geophysical_________ษฺ",
    	health: "ก้_Human Health and Disease________ษฺ",
    	imageryBaseMapsEarthCover: "ก้_Imagery and Base Maps_______ษฺ",
    	inlandWaters: "ก้_Inland Water Resources________ษฺ",
    	location: "ก้_Locations and Geodetic Networks__________ษฺ",
    	intelligenceMilitary: "ก้_Military___ษฺ",
    	oceans: "ก้_Oceans and Estuaries_______ษฺ",
    	transportation: "ก้_Transportation Networks________ษฺ",
    	utilitiesCommunication: "ก้_Utilities and Communication_________ษฺ"
    },
    
    MI_ContextCode: {
    	caption: "ก้_Context___ษฺ",
    	acquisition: "ก้_Acquisition____ษฺ",
    	pass: "ก้_Pass__ษฺ",
    	wayPoint: "ก้_Waypoint___ษฺ"
    },
    
    MI_EnvironmentalRecord: {
    	caption: "ก้_Environmental Conditions________ษฺ",
    	averageAirTemperature: "ก้_Average Air Temperature________ษฺ",
    	maxRelativeHumidity: "ก้_Maximum Relative Humidity_________ษฺ",
    	maxAltitude: "ก้_Maximum Altitude______ษฺ",
    	meterologicalConditions: "ก้_Meterological Conditions________ษฺ"
    },
    
    MI_Event: {
    	identifier: "ก้_Event Identifier______ษฺ",
    	time: "ก้_Time__ษฺ",
    	expectedObjectiveReference: "ก้_Expected Objective (Objective Identifer)_____________ษฺ",
    	relatedSensorReference: "ก้_Related Sensor (Instrument Identifer)____________ษฺ",
    	relatedPassReference: "ก้_Related Pass (Platform Pass Identifer)____________ษฺ"
    },

    MI_GeometryTypeCode: {
    	point: "ก้_Point___ษฺ",
    	linear: "ก้_Linear___ษฺ",
    	areal: "ก้_Areal___ษฺ",
    	strip: "ก้_Strip___ษฺ"
    },
    
    MI_Instrument: {
    	citation: "ก้_Instrument Citation_______ษฺ",
    	identifier: "ก้_Instrument Identifier_______ษฺ",
    	sType: "ก้_Instrument Type______ษฺ",
    	description: "ก้_Instrument Description________ษฺ",
    	mountedOn: "ก้_Mounted On____ษฺ",
    	mountedOnPlatformReference: "ก้_Mounted On (Platform Identifier)___________ษฺ"
    },
    
    MI_Metadata: {
    	acquisitionInformation: "ก้_Acquisition____ษฺ"
    },
    
    MI_Objective: {
    	caption: "ก้_Objective____ษฺ",
    	identifier: "ก้_Objective Identifier_______ษฺ",
    	priority: "ก้_Priority of Target______ษฺ",
    	sFunction: "ก้_Function of Objective_______ษฺ",
    	extent: "ก้_Extent___ษฺ",
    	pass: "ก้_Platform Pass_____ษฺ",
    	sensingInstrumentReference: "ก้_Sensing Instrument (Instrument Identifier)______________ษฺ",
    	objectiveOccurrence: "ก้_Events___ษฺ",
    	sections: {
    		identification: "ก้_Identification_____ษฺ",
    		extent: "ก้_Extent___ษฺ",
    		pass: "ก้_Pass__ษฺ",
    		sensingInstrument: "ก้_Sensing Instrument______ษฺ",
    		objectiveOccurrence: "ก้_Events___ษฺ"
    	}
    },
    
    MI_ObjectiveTypeCode: {
    	caption: "ก้_Type (Collection Technique for Objective)_____________ษฺ",
    	instantaneousCollection: "ก้_Instantaneous Collection________ษฺ",
    	persistentView: "ก้_Persistent View______ษฺ",
    	survey: "ก้_Survey___ษฺ"
    },
    
    MI_Operation: {
    	caption: "ก้_Operation____ษฺ",
    	description: "ก้_Operation Description_______ษฺ",
    	citation: "ก้_Operation Citation______ษฺ",
    	identifier: "ก้_Operation Identifier_______ษฺ",
    	status: "ก้_Operation Status______ษฺ",
    	objectiveReference: "ก้_Related Objective (Objective Identifier)_____________ษฺ",
    	planReference: "ก้_Related Plan (Plan Identifier)__________ษฺ",
    	significantEventReference: "ก้_Related Event (Event Identifier)___________ษฺ",
    	platformReference: "ก้_Related Platform (Platform Identifier)____________ษฺ",
    	sections: {
    		identification: "ก้_Identification_____ษฺ",
    		related: "ก้_Related___ษฺ"
    	}
    },
    
    MI_OperationTypeCode: {
    	caption: "ก้_Operation Type_____ษฺ",
    	real: "ก้_Real__ษฺ",
    	simulated: "ก้_Simulated____ษฺ",
    	synthesized: "ก้_Synthesized____ษฺ"
    },
    
    MI_Plan: {
    	sType: "ก้_Sampling Geometry for Collecting Data____________ษฺ",
    	status: "ก้_Status of Plan_____ษฺ",
    	citation: "ก้_Citation of Authority Requesting Collection______________ษฺ",
    	satisfiedRequirementReference: "ก้_Satisfied Requirement (Requirement Identifier)_______________ษฺ",
    	operationReference: "ก้_Related Operation (Operation Identifier)_____________ษฺ"
    },
    
    MI_Platform: {
    	citation: "ก้_Platform Citation______ษฺ",
    	identifier: "ก้_Platform Identifier_______ษฺ",
    	description: "ก้_Description of Platform Supporting the Instrument________________ษฺ",
    	sponsor: "ก้_Sponsor Organization for Platform___________ษฺ",
    	instrument: "ก้_Instrument(s) mounted on the platform____________ษฺ",
    	instrumentReference: "ก้_Instrument Identifier_______ษฺ",
    	sections: {
    		identification: "ก้_Identification_____ษฺ",
    		sponsor: "ก้_Sponsor___ษฺ",
    		instruments: "ก้_Instruments____ษฺ"
    	}
    },
    
    MI_PlatformPass: {
    	identifier: "ก้_Platform Pass Identifier________ษฺ",
    	extent: "ก้_Platform Pass Extent_______ษฺ",
    	relatedEventReference: "ก้_Related Event (Event Identifer)__________ษฺ"
    },

    MI_PriorityCode: {
    	critical: "ก้_Critical___ษฺ", 
    	highImportance: "ก้_High Importance______ษฺ",
    	mediumImportance: "ก้_Medium Importance______ษฺ",
    	lowImportance: "ก้_Low Importance_____ษฺ"
    },
    
    MI_RequestedDate : {
    	requestedDateOfCollection: "ก้_Requested Date Of Collection_________ษฺ",
    	latestAcceptableDate: "ก้_Latest Acceptable Date________ษฺ"
    },
    
    MI_Requirement: {
    	caption: "ก้_Requirement____ษฺ",
    	citation: "ก้_Citation for Requirement Guidance Material______________ษฺ",
    	identifier: "ก้_Requirement Identifier________ษฺ",
    	requestor: "ก้_Requestor of Requirement________ษฺ",
    	recipient: "ก้_Recipient of Requirement Results___________ษฺ",
    	priority: "ก้_Requirement Priority_______ษฺ",
    	requestedDate: "ก้_Requested Date_____ษฺ",
    	expiryDate: "ก้_Expiry Date____ษฺ",
    	satisifiedPlanReference: "ก้_Satisfied Plan (Plan Identifier)___________ษฺ",
    	sections: {
    		identification: "ก้_Identification_____ษฺ",
    		requestor: "ก้_Requestor____ษฺ",
    		recipient: "ก้_Recipient____ษฺ",
    		priorityAndDates: "ก้_Priority And Dates______ษฺ",
    		satisifiedPlan: "ก้_Satisified  Plan______ษฺ"
    	}
    },
    
    MI_SequenceCode: {
    	caption: "ก้_Sequence___ษฺ",
    	start: "ก้_Start___ษฺ",
    	end: "ก้_End__ษฺ",
    	instantaneous: "ก้_Instantaneous_____ษฺ"
    },
    
    MI_TriggerCode: {
    	caption: "ก้_Trigger___ษฺ",
    	automatic: "ก้_Automatic____ษฺ",
    	manual: "ก้_Manual___ษฺ",
    	preProgrammed: "ก้_Preprogrammed_____ษฺ"
    },
    
    ObjectReference: {
    	uuidref: "ก้_UUID Reference_____ษฺ",
    	xlinkref: "ก้_URL Reference_____ษฺ"
    },
    
    RS_Identifier: {
    	caption: "ก้_ID Plus Code Space______ษฺ",
    	code: "ก้_Code__ษฺ",
    	codeSpace: "ก้_Code Space____ษฺ"
    },
    
    SV_CouplingType: {
    	loose: "ก้_Loose___ษฺ",
    	mixed: "ก้_Mixed___ษฺ",
    	tight: "ก้_Tight___ษฺ"
    },
    
    SV_OperationMetadata: {
    	operationName: "ก้_Operation Name_____ษฺ",
    	DCP: "ก้_DCP__ษฺ",
    	connectPoint: "ก้_Connect Point_____ษฺ"
    },
    
    SV_ServiceIdentification: {
    	serviceType: "ก้_ServiceType____ษฺ",
    	couplingType: "ก้_Coupling Type_____ษฺ",
    	containsOperations: "ก้_Operation Metadata______ษฺ",
    	operatesOn: "ก้_Operates On____ษฺ"
    },
    
    TM_Primitive: {
    	indeterminatePosition: "ก้_Indeterminate Position________ษฺ",
    	indeterminates: {
    		before: "ก้_Before___ษฺ",
       	after: "ก้_After___ษฺ",
      	now: "ก้_Now__ษฺ",
      	unknown: "ก้_Unknown___ษฺ"
    	}
    },
    
    gemet: {
    	concept: {
    		gemetConceptKeyword: "ก้_GEMET Concept Keyword_______ษฺ",
    		tool: "ก้_Look Up____ษฺ...",
    		dialogTitle: "ก้_GEMET - Concept Keyword________ษฺ",
    		searchLabel: "ก้_Search___ษฺ:",
    		searchTip: "ก้_Search GEMET_____ษฺ"
    	},
    	theme: {
    		tool: "ก้_Look Up____ษฺ...",
    		dialogTitle: "ก้_GEMET - Inspire Data Theme_________ษฺ"
    	},
    	ioerror: "ก้_There was an error communicating with the GEMET service: {url}____________________ษฺ",
    	searching: "ก้_Searching GEMET______ษฺ...",
    	noMatch: "ก้_No matching results were found__________ษฺ.",
      languages: {
      	"bg": "ก้_Bulgarian____ษฺ",
      	"cs": "ก้_Czech___ษฺ",
      	"da": "ก้_Danish___ษฺ",
      	"nl": "ก้_Dutch___ษฺ",
      	"en": "ก้_English___ษฺ",
      	"et": "ก้_Estonian___ษฺ",
      	"fi": "ก้_Finnish___ษฺ",
      	"fr": "ก้_French___ษฺ",
      	"de": "ก้_German___ษฺ",
      	"el": "ก้_Greek___ษฺ",
      	"hu": "ก้_Hungarian____ษฺ",
      	"ga": "ก้_Gaelic (Irish)_____ษฺ",
      	"it": "ก้_Italian___ษฺ",
      	"lv": "ก้_Latvian___ษฺ",
      	"lt": "ก้_Lithuanian____ษฺ",
      	"mt": "ก้_Maltese___ษฺ",
      	"pl": "ก้_Polish___ษฺ", 
      	"pt": "ก้_Portuguese____ษฺ",
      	"ro": "ก้_Romanian___ษฺ",
      	"sk": "ก้_Slovak___ษฺ",
      	"sl": "ก้_Slovenian____ษฺ",  	
      	"es": "ก้_Spanish___ษฺ",
      	"sv": "ก้_Swedish___ษฺ"
      }
    }
   
  })
);
